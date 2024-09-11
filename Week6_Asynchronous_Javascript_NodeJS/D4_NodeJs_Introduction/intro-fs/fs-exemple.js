// const fs = require('fs'); // Correction ici, utilise 'fs' au lieu de 'js'

// try {
//   const data = fs.readFileSync('info', 'utf-8'); // Lis le fichier 'info' avec encodage 'utf-8'
//   console.log(data); // Affiche le contenu du fichier dans la console
// } catch (e) {
//   console.log('Error => ', e); // Affiche une erreur en cas de problème
// }
const fs = require('fs');  // Assure-toi d'importer 'fs'

let data = 'bla bla blddffdssfnode fs-exemple.jsa bla';

// fs.writeFile('info.txt', data, 'utf-8', (err) => {
//   if (err) return console.log(err);  // Utilise 'err' pour capturer les erreurs
//   console.log('File written successfully!');
// });

fs.appendFile('info.txt', data, 'utf-8', (err) => {
  if (err) return console.log(err);  // Corrige la gestion des erreurs
  console.log('Content appended successfully!');
});