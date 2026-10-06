const fs = require('fs');
const js = fs.readFileSync('site.js', 'utf8');

function extractFunc(name) {
  const match = js.match(new RegExp(`function ${name}\\([^)]*\\)\\{[\\s\\S]*?\\n\\}`)) || [];
  return match[0] || 'NOT FOUND';
}

console.log('--- Loader (d3) ---');
console.log(extractFunc('d3'));

console.log('--- Lightbox (h3) ---');
console.log(extractFunc('h3'));

console.log('--- SectionLabel (Ei) ---');
console.log(extractFunc('Ei'));

console.log('--- Hero (m3) ---');
console.log(extractFunc('m3'));

console.log('--- Services (T3) ---');
console.log(extractFunc('T3'));

console.log('--- Expertise (E3) ---');
console.log(extractFunc('E3'));

console.log('--- Gallery (S3) ---');
console.log(extractFunc('S3'));
