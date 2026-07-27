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
      if (file.endsWith('.svelte') || file.endsWith('.css') || file.endsWith('.astro') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/Space Grotesk/g, 'Outfit');
  
  if (file.includes('HeroSection.svelte')) {
     newContent = newContent.replace(/font-family: 'Outfit', sans-serif;\s*font-weight: 700;/g, "font-family: 'Syncopate', sans-serif; font-weight: 700; text-transform: uppercase;");
  }
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log('Updated ' + file);
  }
});
