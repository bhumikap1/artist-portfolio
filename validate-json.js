// validate-json.js
const fs = require("fs");
const path = require("path");

function checkJSONFiles(dir) {
  if (dir.includes("node_modules")) return; // Skip node_modules

  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      checkJSONFiles(fullPath);
    } else if (file.endsWith(".json")) {
      try {
        const data = fs.readFileSync(fullPath, "utf-8");
        JSON.parse(data);
        console.log(`✅ Valid JSON: ${fullPath}`);
      } catch (err) {
        console.error(`❌ Invalid JSON in: ${fullPath}`);
        console.error(`   Error: ${err.message}`);
      }
    }
  }
}

checkJSONFiles(__dirname);
