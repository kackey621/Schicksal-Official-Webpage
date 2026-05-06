import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logoPath = path.join(__dirname, '../public/Logo.png');
const publicDir = path.join(__dirname, '../public');

async function generateFavicons() {
  try {
    console.log('Generating favicons from Logo.png...');

    // 192x192 PNG
    await sharp(logoPath)
      .resize(192, 192, { fit: 'cover', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toFile(path.join(publicDir, 'favicon-192.png'));
    console.log('✓ Generated favicon-192.png');

    // 512x512 PNG
    await sharp(logoPath)
      .resize(512, 512, { fit: 'cover', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toFile(path.join(publicDir, 'favicon-512.png'));
    console.log('✓ Generated favicon-512.png');

    // 180x180 Apple Touch Icon
    await sharp(logoPath)
      .resize(180, 180, { fit: 'cover', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✓ Generated apple-touch-icon.png');

    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
