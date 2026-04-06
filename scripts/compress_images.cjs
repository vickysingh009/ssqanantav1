const sharp = require('sharp');
const path = require('path');

const targets = [
  {
    input: path.join(__dirname, '../src/assets/images/portfolio/others/others_1.webp'),
    output: path.join(__dirname, '../src/assets/images/portfolio/others/others_1.webp'),
    quality: 72,
    maxWidth: 1200,
  },
  {
    input: path.join(__dirname, '../src/assets/images/portfolio/architecture/architecture_4.webp'),
    output: path.join(__dirname, '../src/assets/images/portfolio/architecture/architecture_4.webp'),
    quality: 75,
    maxWidth: 1200,
  },
];

async function compressImage({ input, output, quality, maxWidth }) {
  const meta = await sharp(input).metadata();
  const sizeBefore = require('fs').statSync(input).size;

  await sharp(input)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toBuffer()
    .then(buf => {
      require('fs').writeFileSync(output, buf);
      const sizeAfter = buf.length;
      const saved = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(1);
      console.log(`✅ ${path.basename(output)}: ${(sizeBefore/1024).toFixed(0)}KB → ${(sizeAfter/1024).toFixed(0)}KB (saved ${saved}%)`);
    });
}

(async () => {
  for (const t of targets) {
    await compressImage(t);
  }
  console.log('\nDone! Rebuild to see updated bundle sizes.');
})();
