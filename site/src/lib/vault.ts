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
const fresh = (url: string) =>
  fetch(`${url}${url.includes("?") ? "&" : "?"}t=${Date.now()}`, { cache: "no-store" });

async function sha256Hex(bytes: Uint8Array) {
  const copy = new Uint8Array(bytes); // own ArrayBuffer, satisfies BufferSource typing
  const h = await crypto.subtle.digest("SHA-256", copy);
  return [...new Uint8Array(h)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function unlock(answer: string): Promise<string | null> {
  const meta: VaultMeta = await (await fresh("/secret/vault.json")).json();
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
/** Decrypts the vault with a content key from unlock(); returns null if the key is wrong. */
export async function open(keyB64: string): Promise<Payload | null> {
  try {
    // vault.json names the current ciphertext by content hash. Both are fetched past every
    // cache, and a ciphertext whose hash does not match is refetched once (half-propagated deploy).
    const meta: VaultMeta = await (await fresh("/secret/vault.json")).json();
    const want = new URL(meta.bin, location.origin).searchParams.get("v");
    let bin = new Uint8Array(await (await fresh(meta.bin)).arrayBuffer());
    if (want && !(await sha256Hex(bin.slice(12))).startsWith(want)) {
      await new Promise((r) => setTimeout(r, 1500));
      bin = new Uint8Array(await (await fresh(meta.bin)).arrayBuffer());
    }
    const key = await crypto.subtle.importKey("raw", b64(keyB64), "AES-GCM", false, ["decrypt"]);
    const plain = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: new Uint8Array(bin.slice(0, 12)) },
      key,
      new Uint8Array(bin.slice(12)),
    );
    return JSON.parse(new TextDecoder().decode(plain));
  } catch {
    return null;
  }
}
