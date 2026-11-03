// Convierte el bloque que da Firebase ("const firebaseConfig = {...}") al formato que usa el juego.
const fs = require('fs');
const file = 'www/firebase-config.js';
const src = fs.readFileSync(file, 'utf8');
if (/window\.FIREBASE_CONFIG\s*=/.test(src)) { console.log('Configuración ya en formato del juego'); process.exit(0); }
const m = src.match(/firebaseConfig\s*=\s*(\{[\s\S]*?\})/);
if (!m) { console.error('No encuentro "firebaseConfig = {...}" en ' + file); process.exit(1); }
const json = m[1].replace(/([{,]\s*)([A-Za-z_]\w*)\s*:/g, '$1"$2":').replace(/,\s*}/, '}');
const cfg = JSON.parse(json);
for (const k of ['apiKey', 'authDomain', 'databaseURL', 'projectId', 'appId'])
  if (!cfg[k]) { console.error('Falta "' + k + '" en la configuración de Firebase'); process.exit(1); }
fs.writeFileSync(file, 'window.FIREBASE_CONFIG = ' + JSON.stringify(cfg, null, 2) + ';\n');
console.log('Configuración de Firebase lista para el proyecto ' + cfg.projectId);
