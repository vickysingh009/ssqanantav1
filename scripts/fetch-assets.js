import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  { url: 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1200&fm=jpg', name: 'pexels-6489083.jpg' },
  { url: 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1200&fm=webp', name: 'pexels-6489083.webp' },
  { url: 'https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg?auto=compress&cs=tinysrgb&w=800&fm=jpg', name: 'pexels-5998120.jpg' },
  { url: 'https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp', name: 'pexels-5998120.webp' }
];

const destDir = path.join(__dirname, '../src/assets/images/external');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

images.forEach(img => {
  const dest = path.join(destDir, img.name);
  https.get(img.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    if (res.statusCode !== 200) {
      console.error(`Failed to download ${img.name}: HTTP ${res.statusCode}`);
      return;
    }
    const fileStream = fs.createWriteStream(dest);
    res.pipe(fileStream);
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded ${img.name}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${img.name}:`, err.message);
  });
});
