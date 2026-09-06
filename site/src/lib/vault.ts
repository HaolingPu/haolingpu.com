/** Client side of scripts/vault.mjs: derive a key from the answer, unwrap the content key, decrypt the payload. */
const enc = new TextEncoder();
const b64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
export const normalize = (s: string) => s.toLowerCase().replace(/\s+/g, "");

type VaultMeta = {
  v: number;
  kdf: { salt: string; iterations: number };
  wraps: { iv: string; data: string }[];
  bin: string;
};
export type Payload = {
  name: string;
  sub: string;
  heading: string;
  headingSub: string;
  sign: string;
  who: string;
  button: string;
  photos: { tilt: number; tape: "left" | "right"; note: string; sub: string; webp: string }[];
};

/** Returns the raw content key (base64) if the answer is right, else null. */
export async function unlock(answer: string): Promise<string | null> {
  const meta: VaultMeta = await (await fetch("/secret/vault.json", { cache: "no-store" })).json();
  const base = await crypto.subtle.importKey(
    "raw",
    enc.encode(normalize(answer)),
    "PBKDF2",
    false,
    ["deriveKey"],
  );
  const ka = await crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: b64(meta.kdf.salt), iterations: meta.kdf.iterations, hash: "SHA-256" },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"],
  );
  for (const w of meta.wraps) {
    try {
      const k = await crypto.subtle.decrypt({ name: "AES-GCM", iv: b64(w.iv) }, ka, b64(w.data));
      return btoa(String.fromCharCode(...new Uint8Array(k)));
    } catch {
      /* wrong answer for this wrap */
    }
  }
  return null;
}

/** Decrypts the vault with a content key from unlock(); returns null if the key is wrong. */
export async function open(keyB64: string): Promise<Payload | null> {
  try {
    const bin = new Uint8Array(
      await (await fetch("/secret/vault.bin", { cache: "force-cache" })).arrayBuffer(),
    );
    const key = await crypto.subtle.importKey("raw", b64(keyB64), "AES-GCM", false, ["decrypt"]);
    const plain = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: bin.slice(0, 12) },
      key,
      bin.slice(12),
    );
    return JSON.parse(new TextDecoder().decode(plain));
  } catch {
    return null;
  }
}
