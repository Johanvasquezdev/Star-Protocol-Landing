const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.svelte') || file.endsWith('.astro')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  
  // 1. All existing 'Outfit' (which are currently headings) become 'Syncopate'
  newContent = newContent.replace(/font-family:\s*['"]Outfit['"],\s*sans-serif;?/g, "font-family: 'Syncopate', sans-serif; text-transform: uppercase;");
  
  // 2. All 'Syne' become 'Outfit'
  newContent = newContent.replace(/font-family:\s*['"]Syne['"],\s*sans-serif;?/g, "font-family: 'Outfit', sans-serif;");
  
  // 3. All 'Inter' become 'Outfit'
  newContent = newContent.replace(/font-family:\s*['"]Inter['"],\s*sans-serif;?/g, "font-family: 'Outfit', sans-serif;");

  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log('Updated ' + file);
  }
});
