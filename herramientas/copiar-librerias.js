// Copia el motor 3D y Firebase dentro de www/lib para que la app funcione sin internet para cargarlos.
const fs = require('fs');
fs.mkdirSync('www/lib', { recursive: true });
const files = {
  'node_modules/three/build/three.min.js': 'three.min.js',
  'node_modules/firebase/firebase-app-compat.js': 'firebase-app-compat.js',
  'node_modules/firebase/firebase-auth-compat.js': 'firebase-auth-compat.js',
  'node_modules/firebase/firebase-database-compat.js': 'firebase-database-compat.js'
};
for (const [from, to] of Object.entries(files)) fs.copyFileSync(from, 'www/lib/' + to);
console.log('Librerías copiadas');
