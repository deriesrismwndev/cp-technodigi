import sharp from "sharp";
import { mkdirSync, writeFileSync } from "fs";

mkdirSync("public/favicons", { recursive: true });

// Source: the official logo
const SOURCE = "public/images/logo.png";

// Generate each size directly from the source (no chained resize)
const sizes = [16, 32, 180, 192, 512];
for (const size of sizes) {
  const name = size === 180 ? "apple-touch-icon.png" : `favicon-${size}.png`;
  await sharp(SOURCE)
    .resize(size, size, { fit: "cover" })
    .png()
    .toFile(`public/favicons/${name}`);
  console.log(`✓ ${name} (${size}x${size})`);
}

// (Re)build valid .ico from 32px PNG (ICO container with PNG payload)
const p32 = await sharp(SOURCE).resize(32, 32, { fit: "cover" }).png().toBuffer();
const iconDir = Buffer.alloc(6);
iconDir.writeUInt16LE(0, 0); // reserved
iconDir.writeUInt16LE(1, 2); // type: icon
iconDir.writeUInt16LE(1, 4); // count: 1

const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0);   // width
entry.writeUInt8(32, 1);   // height
entry.writeUInt8(0, 2);    // colors
entry.writeUInt8(0, 3);    // reserved
entry.writeUInt16LE(1, 4); // planes
entry.writeUInt16LE(32, 6);// bpp
entry.writeUInt32LE(p32.length, 8); // size
entry.writeUInt32LE(22, 12);        // offset

const ico = Buffer.concat([iconDir, entry, p32]);
writeFileSync("public/favicons/favicon.ico", ico);
writeFileSync("public/favicon.ico", ico);
console.log("✓ favicon.ico (valid ICO, 32x32 PNG payload) — root + favicons/");

console.log("Done. All favicons regenerated directly from public/images/logo.png");