/**
 * Convert all local JPG/JPEG/PNG images in assets/images to WebP,
 * update all references in .html and .js files, then delete originals.
 *
 * Usage: node convert-local-images.js
 */

const sharp = require('sharp');
const fs    = require('fs');
const path  = require('path');
const { execSync } = require('child_process');

const IMAGES_DIR = path.join(__dirname, 'assets', 'images');
const SRC_EXTS   = ['.jpg', '.jpeg', '.png']; // case-insensitive below

// Logos should stay as PNG (transparency) — skip them
const SKIP_FILES = ['logo1.png', 'logo2.png', 'logo3.png'];

async function convertImages() {
    const files = fs.readdirSync(IMAGES_DIR);
    const toConvert = files.filter(f => {
        const ext = path.extname(f).toLowerCase();
        return SRC_EXTS.includes(ext) && !SKIP_FILES.includes(f);
    });

    console.log(`Found ${toConvert.length} images to convert.\n`);

    const renamed = []; // { oldName, newName }

    for (const file of toConvert) {
        const srcPath  = path.join(IMAGES_DIR, file);
        const baseName = file.slice(0, file.length - path.extname(file).length);
        const newName  = baseName + '.webp';
        const dstPath  = path.join(IMAGES_DIR, newName);

        process.stdout.write(`  ${file} → ${newName} ... `);

        try {
            await sharp(srcPath).webp({ quality: 82 }).toFile(dstPath);
            const oldKB = Math.round(fs.statSync(srcPath).size / 1024);
            const newKB = Math.round(fs.statSync(dstPath).size / 1024);
            const pct   = Math.round((1 - newKB / oldKB) * 100);
            console.log(`${oldKB}KB → ${newKB}KB (${pct}% smaller)`);
            renamed.push({ oldName: file, newName });
        } catch (err) {
            console.log(`FAILED: ${err.message}`);
        }
    }

    return renamed;
}

function updateReferences(renamed) {
    // Collect all .html and .js files in the project (excluding node_modules)
    const allFiles = [];
    function walk(dir) {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            const full = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                if (entry.name === 'node_modules') continue;
                walk(full);
            } else if (['.html', '.js', '.css'].includes(path.extname(entry.name).toLowerCase())) {
                allFiles.push(full);
            }
        }
    }
    walk(__dirname);

    console.log(`\nUpdating references in ${allFiles.length} files...`);

    let totalReplacements = 0;
    for (const filePath of allFiles) {
        let content = fs.readFileSync(filePath, 'utf8');
        let changed = false;

        for (const { oldName, newName } of renamed) {
            // Escape special chars for regex (spaces, parentheses)
            const escaped = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re = new RegExp(escaped, 'gi');
            const count = (content.match(re) || []).length;
            if (count > 0) {
                content = content.replace(re, newName);
                totalReplacements += count;
                changed = true;
            }
        }

        if (changed) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`  Updated: ${path.relative(__dirname, filePath)}`);
        }
    }

    console.log(`\nTotal reference replacements: ${totalReplacements}`);
}

function deleteOriginals(renamed) {
    console.log('\nDeleting original files...');
    let deleted = 0;
    for (const { oldName } of renamed) {
        const srcPath = path.join(IMAGES_DIR, oldName);
        if (fs.existsSync(srcPath)) {
            fs.unlinkSync(srcPath);
            deleted++;
        }
    }
    console.log(`Deleted ${deleted} original files.`);
}

async function main() {
    console.log('=== Local Image → WebP Conversion ===\n');

    const renamed = await convertImages();

    if (renamed.length === 0) {
        console.log('Nothing to convert.');
        return;
    }

    updateReferences(renamed);
    deleteOriginals(renamed);

    console.log('\n=== Done! ===');
    console.log(`Converted ${renamed.length} images to WebP.`);
}

main().catch(err => {
    console.error('Fatal:', err);
    process.exit(1);
});
