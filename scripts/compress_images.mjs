import sharp from 'sharp';
import { statSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const targets = [
  {
    input: path.join(__dirname, '../src/assets/images/portfolio/others/others_1.webp'),
    quality: 72,
    maxWidth: 1200,
  },
  {
    input: path.join(__dirname, '../src/assets/images/portfolio/architecture/architecture_4.webp'),
    quality: 75,
    maxWidth: 1200,
  },
];

async function compressImage({ input, quality, maxWidth }) {
  const sizeBefore = statSync(input).size;
  const buf = await sharp(input)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toBuffer();
  writeFileSync(input, buf);
  const saved = ((sizeBefore - buf.length) / sizeBefore * 100).toFixed(1);
  console.log(`✅ ${path.basename(input)}: ${(sizeBefore/1024).toFixed(0)}KB → ${(buf.length/1024).toFixed(0)}KB  (saved ${saved}%)`);
}

for (const t of targets) {
  await compressImage(t);
}
console.log('\nDone!');
