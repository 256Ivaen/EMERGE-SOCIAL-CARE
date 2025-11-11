const fs = require('fs');
const path = require('path');

function removeTxtFiles(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      removeTxtFiles(filePath);
    } else if (path.extname(file) === '.txt') {
      fs.unlinkSync(filePath);
      console.log(`Removed: ${filePath}`);
    }
  });
}

// Remove all .txt files from out directory
removeTxtFiles(path.join(__dirname, 'out'));
console.log('✅ All .txt files removed from build!');