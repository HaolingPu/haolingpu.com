// Packs the private content of /secret/heart into an encrypted vault.
//   node scripts/vault.mjs            (reads secret.local.json, git-ignored)
// Output: public/secret/vault.bin (AES-256-GCM ciphertext of a JSON payload)
//         public/secret/vault.json (PBKDF2 params + the content key wrapped under each accepted answer)
// Nothing in the output reveals the answers, the name, the captions, or the photos.
import { createCipheriv, createHash, pbkdf2Sync, randomBytes } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import sharp from "sharp";

const cfg = JSON.parse(readFileSync("secret.local.json", "utf8"));
const normalize = (s) => s.toLowerCase().replace(/\s+/g, "");

// 1. payload
const photos = [];
for (const p of cfg.photos) {
  const buf = await sharp(resolve(p.file)).rotate().resize({ height: 1200, withoutEnlargement: true }).webp({ quality: 80 }).toBuffer();
  photos.push({ tilt: p.tilt, tape: p.tape, note: p.note, sub: p.sub, webp: buf.toString("base64") });
}
const payload = Buffer.from(JSON.stringify({ name: cfg.name, sub: cfg.sub, heading: cfg.heading, headingSub: cfg.headingSub, sign: cfg.sign, who: cfg.who, button: cfg.button, photos }));

// 2. content key + AES-256-GCM
const K = randomBytes(32);
const iv = randomBytes(12);
const c = createCipheriv("aes-256-gcm", K, iv);
const ct = Buffer.concat([c.update(payload), c.final(), c.getAuthTag()]);
mkdirSync("public/secret", { recursive: true });
writeFileSync("public/secret/vault.bin", Buffer.concat([iv, ct]));

// 3. wrap K under each answer (PBKDF2-SHA256, 300k iterations, shared salt)
const salt = randomBytes(16);
const iterations = 300000;
const wraps = cfg.answers.map((a) => {
  const ka = pbkdf2Sync(Buffer.from(normalize(a), "utf8"), salt, iterations, 32, "sha256");
  const wiv = randomBytes(12);
  const w = createCipheriv("aes-256-gcm", ka, wiv);
  const wct = Buffer.concat([w.update(K), w.final(), w.getAuthTag()]);
  return { iv: wiv.toString("base64"), data: wct.toString("base64") };
});
// shuffle so wrap order says nothing about answer order
wraps.sort(() => Math.random() - 0.5);
const binHash = createHash("sha256").update(ct).digest("hex").slice(0, 12);
writeFileSync("public/secret/vault.json", JSON.stringify({ v: 1, kdf: { salt: salt.toString("base64"), iterations }, wraps, bin: `/secret/vault.bin?v=${binHash}` }));
console.log(`vault: ${(ct.length / 1024).toFixed(0)} KB payload, ${wraps.length} wrapped keys, ${photos.length} photos`);
