import fs from 'node:fs';
import path from 'node:path';
import { createCanvas, loadImage } from 'canvas';

const ICONS_DIR = path.resolve('public/icons');
const ICON_SOURCE_PATH = path.resolve('public/icon-source.png');
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

/**
 * Generate Chrome extension PNG icons from the text-free master image.
 * @returns {Promise<void>} Resolves after all configured icon sizes are written.
 */
async function main() {
  const img = await loadImage(ICON_SOURCE_PATH);

  // Sizes required by Chrome Manifest V3:
  // 16: Extension toolbar & dropdown list
  // 32: Windows & Retina 2x toolbar
  // 48: chrome://extensions management page
  // 128: Chrome Web Store & installation badge
  const sizes = [16, 32, 48, 128];

  for (const size of sizes) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, size, size);

    const outPath = path.join(ICONS_DIR, `icon${size}.png`);
    fs.writeFileSync(outPath, canvas.toBuffer('image/png'));
    console.log(`Generated ${outPath} (${size}x${size})`);
  }
}

main().catch((err) => {
  console.error('Failed to generate icons:', err);
  process.exit(1);
});
