import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const files = ['glass_painting.png', 'hero_bg.png', 'pot_art.png', 'wall_decor.png'];

files.forEach(file => {
  const inputPath = path.join(publicDir, file);
  const outputPath = path.join(publicDir, file.replace('.png', '.webp'));
  
  if (fs.existsSync(inputPath)) {
    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`Successfully converted ${file} to WebP`))
      .catch(err => console.error(`Error converting ${file}:`, err));
  } else {
    console.warn(`File not found: ${inputPath}`);
  }
});
