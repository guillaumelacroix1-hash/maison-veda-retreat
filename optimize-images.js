import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Dossiers à parcourir (ressources et public)
const DIRS_TO_PROCESS = [
    path.join(process.cwd(), 'ressources'),
    path.join(process.cwd(), 'public')
];

const MAX_WIDTH = 2000;
const QUALITY = 80;

// Extensions supportées
const SUPPORTED_EXT = ['.jpg', '.jpeg', '.png', '.webp'];

async function processImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    
    // Read image metadata
    try {
        const metadata = await sharp(filePath).metadata();
        
        let needsResize = metadata.width > MAX_WIDTH;
        // On compresse toujours au moins un peu.
        
        // On crée un fichier temporaire
        const tempPath = filePath + '.tmp' + ext;
        
        // Pipeline sharp
        let pipeline = sharp(filePath);
        
        if (needsResize) {
            pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
        }
        
        // On gère la compression selon le format d'origine pour ne pas changer d'extension par défaut (et casser les imports React)
        if (ext === '.jpg' || ext === '.jpeg') {
            pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
        } else if (ext === '.png') {
            pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 8 });
        } else if (ext === '.webp') {
            pipeline = pipeline.webp({ quality: QUALITY });
        }
        
        await pipeline.toFile(tempPath);
        
        // On remplace l'original par l'image optimisée
        const oldSize = fs.statSync(filePath).size;
        const newSize = fs.statSync(tempPath).size;
        
        // Si l'image optimisée est plus légère (ce qui devrait toujours être le cas), on remplace
        if (newSize < oldSize || needsResize) {
            fs.renameSync(tempPath, filePath);
            console.log(`✅ Optimisé: ${path.basename(filePath)} | ${(oldSize/1024/1024).toFixed(2)} MB -> ${(newSize/1024/1024).toFixed(2)} MB`);
        } else {
            // Sinon on garde l'original si la compression l'a rendu plus lourd (assez rare)
            fs.unlinkSync(tempPath);
            console.log(`⏭️  Ignoré (déjà optimisé): ${path.basename(filePath)}`);
        }
        
    } catch (err) {
        console.error(`❌ Erreur sur ${path.basename(filePath)}:`, err.message);
    }
}

async function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            await walkDir(fullPath);
        } else {
            const ext = path.extname(fullPath).toLowerCase();
            if (SUPPORTED_EXT.includes(ext)) {
                await processImage(fullPath);
            }
        }
    }
}

async function run() {
    console.log(`🚀 Démarrage de l'optimisation des images... (Max Width: ${MAX_WIDTH}px)`);
    for (const dir of DIRS_TO_PROCESS) {
        await walkDir(dir);
    }
    console.log(`✨ Terminé ! Vous pouvez relancer ce script avec "node optimize-images.js" quand vous ajoutez des photos.`);
}

run();
