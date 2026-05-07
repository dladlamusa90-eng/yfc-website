/**
 * Re-compress existing WebP images that exceed a size threshold.
 * Applies a max-dimension cap and lower quality to reduce file sizes
 * for mobile performance.
 *
 * Usage: node recompress-webp.js
 */

const sharp = require('sharp');
const fs    = require('fs');
const path  = require('path');

// Limit sharp to a single thread to avoid contention
sharp.concurrency(1);
sharp.cache(false);

const IMAGES_DIR  = path.join(__dirname, 'assets', 'images');
const MAX_SIDE    = 1200;   // max width or height in pixels
const QUALITY     = 75;     // WebP quality
const SIZE_CUTOFF = 400;    // KB — only reprocess files larger than this

// Skip logos
const SKIP = new Set(['logo1.png', 'logo2.png', 'logo3.png']);

async function main() {
    const files = fs.readdirSync(IMAGES_DIR).filter(f => {
        const ext = path.extname(f).toLowerCase();
        return ext === '.webp' && !SKIP.has(f);
    });

    const oversize = files.filter(f => {
        const kb = fs.statSync(path.join(IMAGES_DIR, f)).size / 1024;
        return kb > SIZE_CUTOFF;
    });

    console.log(`Found ${oversize.length} WebP files above ${SIZE_CUTOFF} KB.\n`);

    let saved = 0;
    let totalSavedKB = 0;

    for (let i = 0; i < oversize.length; i++) {
        const file     = oversize[i];
        const fullPath = path.join(IMAGES_DIR, file);
        const oldKB    = Math.round(fs.statSync(fullPath).size / 1024);

        process.stdout.write(`  ${file} (${oldKB} KB) → `);

        try {
            const buf = await sharp(fullPath)
                .resize({ width: MAX_SIDE, height: MAX_SIDE, fit: 'inside', withoutEnlargement: true })
                .webp({ quality: QUALITY })
                .toBuffer();

            const newKB = Math.round(buf.length / 1024);
            const pct   = Math.round((1 - newKB / oldKB) * 100);

            // Only replace if smaller
            if (newKB < oldKB) {
                fs.writeFileSync(fullPath, buf);
                console.log(`${newKB} KB (${pct}% smaller) ✓`);
                totalSavedKB += (oldKB - newKB);
                saved++;
            } else {
                console.log(`${newKB} KB (no gain, kept original)`);
            }
        } catch (err) {
            console.log(`FAILED: ${err.message}`);
        }
    }

    console.log(`\n=== Done ===`);
    console.log(`Re-compressed: ${saved} files`);
    console.log(`Total saved:   ${Math.round(totalSavedKB / 1024)} MB`);
}

main().catch(err => { console.error(err); process.exit(1); });
