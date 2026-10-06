const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const js = fs.readFileSync('site.js', 'utf8');

// Find all URLs
const extUrls = new Set();
const regex = /https?:\/\/[a-zA-Z0-9_\-\.\/:\?\#\=\&\%\+\@]+/g;
let m;
while ((m = regex.exec(js)) !== null) {
  extUrls.add(m[0]);
}

console.log('--- ALL EXTERNAL URLS ---');
console.log(Array.from(extUrls));

// Find all data arrays, objects, components in JS
// Let's dump sections of code or format the JS nicely using prettier or esbuild/acorn if possible
