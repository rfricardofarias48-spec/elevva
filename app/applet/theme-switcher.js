const fs = require('fs');
const path = require('path');

const directories = ['./components', './App.tsx', './index.html'];

function processFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.html')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  if (filePath.endsWith('.html')) {
    content = content.replace(/background-color: #FFFFFF;/g, 'background-color: #111827;');
    content = content.replace(/color: #111827;/g, 'color: #FFFFFF;');
    content = content.replace(/rgba\(238,242,255,1\)/g, 'rgba(17,24,39,1)');
    content = content.replace(/rgba\(253,244,255,1\)/g, 'rgba(31,41,55,1)');
    content = content.replace(/rgba\(240,253,244,1\)/g, 'rgba(17,24,39,1)');
  } else {
    // Custom replacements to avoid double replacement
    content = content.replace(/\bbg-white\b/g, 'bg-[#111827]');
    content = content.replace(/\btext-brand-black\b/g, 'text-white');
    content = content.replace(/\bbg-gray-50\b/g, 'bg-gray-900');
    content = content.replace(/\bbg-gray-100\b/g, 'bg-gray-800');
    content = content.replace(/\bbg-gray-200\b/g, 'bg-gray-700');
    content = content.replace(/\bborder-gray-50\b/g, 'border-gray-900');
    content = content.replace(/\bborder-gray-100\b/g, 'border-gray-800');
    content = content.replace(/\bborder-gray-200\b/g, 'border-gray-700');
    content = content.replace(/\bborder-gray-300\b/g, 'border-gray-600');
    content = content.replace(/\btext-gray-600\b/g, 'text-gray-400');
    content = content.replace(/\btext-gray-700\b/g, 'text-gray-300');
    content = content.replace(/\btext-gray-800\b/g, 'text-gray-200');
    content = content.replace(/\btext-gray-900\b/g, 'text-gray-100');
    content = content.replace(/\bbg-white\/60\b/g, 'bg-[#111827]/60');
    content = content.replace(/\bbg-white\/80\b/g, 'bg-[#111827]/80');
    content = content.replace(/\bbg-white\/90\b/g, 'bg-[#111827]/90');
    content = content.replace(/\bfrom-white\b/g, 'from-[#111827]');
    content = content.replace(/\bvia-white\b/g, 'via-[#111827]');
    content = content.replace(/\bto-white\b/g, 'to-[#111827]');
    content = content.replace(/\bfill-brand-black\b/g, 'fill-white');
    
    // Also replace some specific hardcoded colors if any
    content = content.replace(/bg-\[\#FFFFFF\]/g, 'bg-[#111827]');
    content = content.replace(/text-\[\#111827\]/g, 'text-white');
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        walkDir(fullPath);
      }
    } else {
      processFile(fullPath);
    }
  }
}

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    if (fs.statSync(dir).isDirectory()) {
      walkDir(dir);
    } else {
      processFile(dir);
    }
  }
});
