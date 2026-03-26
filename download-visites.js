import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
    "2024/04/IMG_0941.jpg",
    "2024/04/Lanka-Yoga-Accomadation-23-Dean-Raphael-23.jpg",
    "2024/04/B5B7737E-825C-4056-A5AF-04029164CA54-scaled.jpg",
    "2024/04/e4caa912-df5d-4348-9bfc-6ebca3aab961.jpg",
    "2024/04/Lanka-Yoga-2023-Dean-Raphael-116.jpg",
    "2024/04/IMG_1782-rotated.jpg",
    "2024/04/IMG_0945.jpg",
    "2024/04/IMG_0943.jpg",
    "2024/04/c26ae34f-19bc-4313-b0de-ef36e0e63142.jpg",
    "2024/04/A43C0BAE-DD96-4760-9E20-AF43DE709B2F-scaled.jpg",
    "2024/04/dbee1f26-bbf1-4ead-a192-bddd7d0e8fc4.jpg",
    "2024/04/IMG_1403.jpg",
    "2024/04/IMG_1538-rotated.jpg",
    "2024/04/IMG_1520-rotated.jpg",
    "2024/04/b64cfcc7-8356-459a-99d5-b4e800038f47.jpg",
    "2024/04/IMG_1562.jpg",
    "2024/04/IMG_1434-rotated.jpg",
    "2024/04/IMG_1080.jpg",
    "2026/01/IMG_1084-scaled.jpeg",
    "2026/01/IMG_1434.jpeg",
    "2026/01/IMG_1454.jpeg",
    "2024/03/bff74e0e-a159-403a-bac2-35ec5f27a83b.jpeg",
    "2024/03/b625f93e-c6b2-4fef-80b2-4b9c76a6ef8b.jpeg",
    "2024/03/IMG_1013.jpeg",
    "2024/03/IMG_1179.jpeg",
    "2024/03/7667b6d1-c6e5-4c25-acbe-d1132569b6ba.jpeg",
    "2024/03/edd738fd-4872-4b1a-bfcf-b7dd8c097156.jpeg",
    "2024/03/IMG_6556.jpeg",
    "2024/03/IMG_6804.jpeg",
    "2024/03/IMG_6813-scaled.jpeg",
    "2024/03/IMG_6377-scaled.jpeg",
    "2024/03/IMG_6382.jpeg",
    "2024/03/IMG_6472.jpeg",
    "2024/03/IMG_6104.jpeg",
    "2024/03/IMG_5984-scaled.jpeg",
    "2024/03/IMG_7021.jpeg",
    "2024/03/IMG_7868.jpeg",
    "2024/03/IMG_0151.jpeg",
    "2024/03/9d6fac05-31f0-483d-954a-5146316fc200.jpeg",
    "2024/03/IMG_1335.jpeg",
    "2024/03/IMG_1313.jpeg",
    "2024/03/IMG_1323.jpeg",
    "2024/03/9cea54c9-3306-4470-86f1-a21e91268c1b.jpeg",
    "2024/03/IMG_1422.jpeg",
    "2024/03/563dc783-63ae-4a77-b3fe-982de12cb2b5.jpeg",
    "2024/03/IMG_1533-scaled.jpeg",
    "2024/03/IMG_3876-scaled.jpeg",
    "2024/03/IMG_5348-scaled.jpeg",
    "2024/03/IMG_5330-scaled.jpeg",
    "2024/03/IMG_6486-scaled.jpeg",
    "2024/03/IMG_6487-scaled.jpeg",
    "2024/03/338f1b27-5b15-41f0-a953-f0374af4627a.jpeg",
    "2024/03/IMG_6699-scaled.jpeg",
    "2024/03/IMG_6693-scaled.jpeg",
    "2024/03/7fad718d-9aa9-4f52-832a-b4c95832e1ed.jpeg",
    "2024/03/c302aaa9-ad07-4002-9564-23b610b43546.jpeg",
    "2024/03/c7fc8929-843c-4c33-bf03-a421b6c89c95.jpeg",
    "2024/03/0a297506-8869-40c1-9ed9-f24c63cfa349.jpeg",
    "2024/03/b107f86c-1ba0-4a46-b6b4-9f40c89b96bc.jpeg",
    "2024/03/71646513-04ad-49d0-be3b-6a489534c4db.jpeg",
    "2024/03/IMG_6981.jpeg",
    "2024/03/IMG_6972-scaled.jpeg",
    "2024/03/7adc5d5e-56c6-4768-8dc1-0b6825212c3f.jpeg",
    "2024/03/fa535d05-51a8-463c-9de5-9016426c979a.jpeg",
    "2024/03/IMG_7021-1-scaled.jpeg",
    "2024/03/IMG_7178.jpeg",
    "2024/03/IMG_7183-scaled.jpeg",
    "2024/03/IMG_7229-scaled.jpeg",
    "2024/03/IMG_7218-scaled.jpeg",
    "2024/03/be96b390-48c4-45ed-8b8a-9116d656db08.jpeg",
    "2024/03/IMG_7236-scaled.jpeg",
    "2025/08/IMG_1422.jpeg",
    "2024/03/b864fb7a-f080-481b-bba0-4f84b1624578.jpeg",
    "2024/03/IMG_7315.jpeg",
    "2024/03/3362061f-a65e-48b4-bb78-0040e331a9b8.jpeg",
    "2025/08/3c52f4c3-16be-409f-a3b1-0ccac0bf11aa.jpg",
    "2025/08/7adc5d5e-56c6-4768-8dc1-0b6825212c3f.jpg",
    "2025/08/5fa86b0f-92fe-4390-88d5-b995b3b94e6a.jpg",
    "2025/08/80EE57CC-0E06-42CD-A2D3-D9EBAF7A53B4-rotated.jpg",
    "2025/08/338f1b27-5b15-41f0-a953-f0374af4627a.jpg",
    "2025/08/590a9055-c28b-40eb-b6bb-06554a9afe13.jpg",
    "2025/08/79766ed2-85f9-4a95-87be-69a41f4ab87d.jpg",
    "2025/08/3917a673-c329-4350-9846-85910b78ea53.jpg",
    "2025/08/1605e7bb-fdc5-46b1-9427-81c324fa5e4f.jpg",
    "2025/08/940b2ea1-c8a9-4a23-bc05-ef5b96f96276.jpg",
    "2025/08/b6f54391-8174-4b80-b5e7-16118262778b.jpg",
    "2025/08/bae62571-3b82-487d-b2d7-f2960bbda237.jpg",
    "2025/08/be96b390-48c4-45ed-8b8a-9116d656db08.jpg",
    "2025/08/6cbc341f-e847-46ba-b70d-03f4bc5027d5.jpg",
    "2025/08/c302aaa9-ad07-4002-9564-23b610b43546.jpg",
    "2025/08/e4dceaf6-fb50-450b-9a83-7e30c5ddb2a7.jpg",
    "2025/08/IMG_1188.jpeg",
    "2025/08/IMG_1245.jpeg",
    "2025/08/IMG_1289-rotated.jpeg",
    "2025/08/IMG_1291.jpeg",
    "2025/08/IMG_1313.jpeg",
    "2025/08/IMG_1528-rotated.jpeg",
    "2025/08/IMG_1483.jpeg",
    "2025/08/IMG_1430.jpeg",
    "2025/08/IMG_5348-rotated.jpeg",
    "2025/08/IMG_5386.jpeg"
];

const baseUrl = 'https://www.lamaisonveda.com/wp-content/uploads/';
const targetDir = path.join(process.cwd(), 'public', 'visites');

// Ensure directory exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

async function downloadFile(url, dest) {
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0',
            'Accept': 'image/*,*/*;q=0.8',
            'Referer': 'https://www.lamaisonveda.com/'
        }
    };
    
    try {
        let response = await fetch(url, options);
        if (response.status === 404 && url.includes('-scaled')) {
            console.log(`Fallback for ${url}`);
            const fallbackUrl = url.replace('-scaled', '');
            return await downloadFile(fallbackUrl, dest);
        } else if (response.status === 404 && url.includes('-rotated')) {
            console.log(`Fallback for ${url}`);
            const fallbackUrl = url.replace('-rotated', '');
            return await downloadFile(fallbackUrl, dest);
        } else if (response.status === 404) {
            console.log("Not found URL, trying generic", url);
            return;
        } else if (!response.ok) {
            throw new Error(`Serveur a répondu: ${response.status} pour ${url}`);
        }
        
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        fs.writeFileSync(dest, buffer);
    } catch(err) {
        throw err;
    }
}

async function run() {
    console.log(`⏳ Download of ${images.length} images...`);
    let downloaded = [];
    
    // Process in batches of 5 to speed up
    for (let i = 0; i < images.length; i += 5) {
        const batch = images.slice(i, i + 5);
        await Promise.all(batch.map(async (img) => {
            const imageUrl = baseUrl + img;
            const rawFileName = path.basename(img);
            const cleanedName = rawFileName.replace('-scaled', '').replace('-rotated', '');
            const targetPath = path.join(targetDir, cleanedName);
            
            try {
                if (!fs.existsSync(targetPath)) {
                    await downloadFile(imageUrl, targetPath);
                }
                console.log(`✅ Downloaded: ${cleanedName}`);
                downloaded.push(cleanedName);
            } catch (e) {
                console.error(`❌ Error on ${cleanedName}: ${e.message}`);
            }
        }));
    }
    
    const metadataPath = path.join(targetDir, 'gallery-images.json');
    fs.writeFileSync(metadataPath, JSON.stringify(downloaded, null, 2));
    console.log(`🎉 Images téléchargées dans public/visites ! Un fichier JSON a été créé pour l'import.`);
}

run();
