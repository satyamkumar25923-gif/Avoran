import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const files = ['glass_painting.webp', 'hero_bg.webp', 'pot_art.webp', 'wall_decor.webp'];

files.forEach(file => {
  const inputPath = path.join(publicDir, file);
  const tempPath = path.join(publicDir, `temp_${file}`);
  
  if (fs.existsSync(inputPath)) {
    sharp(inputPath)
      .resize({ width: 800, withoutEnlargement: true }) // Downscale to max 800px
      .webp({ quality: 50, effort: 6 }) // Very aggressive compression
      .toFile(tempPath)
      .then(() => {
        fs.renameSync(tempPath, inputPath);
        console.log(`Aggressively compressed ${file}`);
      })
      .catch(err => console.error(`Error compressing ${file}:`, err));
  } else {
    console.warn(`File not found: ${inputPath}`);
  }
});
