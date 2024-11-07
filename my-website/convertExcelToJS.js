const fs = require('fs');
const xlsx = require('xlsx');

// Charger le fichier Excel
const workbook = xlsx.readFile('data.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// Convertir les données Excel en JSON avec correction pour les virgules
const products = xlsx.utils.sheet_to_json(worksheet).map(row => ({
  reference: row.reference,
  description: row.description,
  détail: row.détail,
  category: row.category,
  price: isNaN(parseFloat(row.price.toString().replace(',', '.'))) ? 0 : parseFloat(row.price.toString().replace(',', '.')) 
}));

// Transformer en module JavaScript
const jsData = `const products = ${JSON.stringify(products, null, 2)};\n\nexport default products;\n`;

// Écrire dans products.js
fs.writeFileSync('src/data/products.js', jsData);
console.log('Données converties avec succès en products.js');
