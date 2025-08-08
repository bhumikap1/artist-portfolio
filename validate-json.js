const fs = require('fs');
const path = require('path');

function checkJSONFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      checkJSONFiles(fullPath);
    } else if (file.endsWith('.json')) {
      try {
        const data = fs.readFileSync(fullPath, 'utf-8');
        JSON.parse(data);
      } catch (err) {
        console.error(`❌ Invalid JSON in: ${fullPath}`);
        console.error(`Error: ${err.message}`);
      }
    }
  }
}

checkJSONFiles(__dirname);
