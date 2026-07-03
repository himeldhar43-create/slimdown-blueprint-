const fs = require('fs');
const path = require('path');

console.log('🌸 SLIMDOWN BLUEPRINT - INITIALIZING PROJECT BOOTSTRAP 🌸');

// Define directory tree
const directories = [
  'public',
  'src',
  'src/components',
  'src/data',
  'src/pages',
];

// Ensure directories exist
directories.forEach((dir) => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  } else {
    console.log(`ℹ️ Directory already exists: ${dir}`);
  }
});

console.log('\n✨ All directories verified and operational.');
console.log('🚀 Ready to run the development server! Execute: npm run dev');
