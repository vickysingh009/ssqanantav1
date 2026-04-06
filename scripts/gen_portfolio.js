const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, '../src/assets/images/portfolio');
const categoriesMap = {
    'bedroom': { title: 'Bedroom Design', category: 'Bedroom' },
    'commercial': { title: 'Commercial Design', category: 'Commercial' },
    'kitchen': { title: 'Modular Kitchen Design', category: 'Modular Kitchen' },
    'living_room': { title: 'Living Room Design', category: 'Living Room' },
    'residential': { title: 'Residential Design', category: 'Residential' },
    'architecture': { title: 'Architecture Design', category: 'Architecture' },
    'others': { title: 'Other Designs', category: 'Others' }
};

let imports = '';
let portfolioData = 'export const portfolioData = [\n';
let currentId = 1;

const folders = ['bedroom', 'commercial', 'kitchen', 'living_room', 'residential', 'architecture', 'others'];

for (const folder of folders) {
    const folderPath = path.join(portfolioDir, folder);
    if (!fs.existsSync(folderPath)) continue;
    
    const files = fs.readdirSync(folderPath)
        .filter(f => f.endsWith('.webp'))
        .sort((a, b) => {
            const matchA = a.match(/_(\d+)\.webp$/);
            const matchB = b.match(/_(\d+)\.webp$/);
            const numA = matchA ? parseInt(matchA[1]) : 0;
            const numB = matchB ? parseInt(matchB[1]) : 0;
            return numA - numB;
        });
        
    for (const file of files) {
        let importVarName = file.replace(/[^a-zA-Z0-9]/g, '_');
        const importName = `img_${folder}_${importVarName}`;
        imports += `import ${importName} from '../assets/images/portfolio/${folder}/${file}';\n`;
        
        const catInfo = categoriesMap[folder] || { title: 'Interior Design', category: 'Others' };
        
        portfolioData += `  { id: ${currentId}, title: '${catInfo.title}', category: '${catInfo.category}', images: [${importName}], alt: '${catInfo.category} - premium interior styling' },\n`;
        currentId++;
    }
}

portfolioData += '];\n\n';

const categoriesArray = "export const categories = [\n  'All', 'Modular Kitchen', 'Living Room', 'Bedroom', 'Commercial', 'Residential', 'Architecture', 'Others', 'Wardrobe', 'Space Saving'\n];\n";

const newContent = imports + '\n' + portfolioData + categoriesArray;
fs.writeFileSync(path.join(__dirname, '../src/data/portfolioData.js'), newContent);
console.log('Successfully generated portfolioData.js');
