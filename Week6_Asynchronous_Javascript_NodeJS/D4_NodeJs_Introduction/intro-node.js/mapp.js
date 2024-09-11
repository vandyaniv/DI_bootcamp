// Définir une fonction pour dire bonjour
const hello = (name) => {
  return `Hello, ${name}, welcome to NodeJS`;
};

// Définir une fonction pour obtenir le nom
const getName = (name) => {
  return `My name is ${name}`;
};

// Exporter les deux fonctions pour pouvoir les utiliser dans un autre fichier
module.exports = {
  hello,
  getName
};