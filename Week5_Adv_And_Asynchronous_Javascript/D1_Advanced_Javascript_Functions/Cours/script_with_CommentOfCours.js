// Déclaration de variables :
// 'var' peut être déclaré après son utilisation, mais sa valeur sera 'undefined' jusqu'à ce qu'elle soit définie.
// 'var' peut être redéclaré plusieurs fois, contrairement à 'let' et 'const'.

console.log(x); // Affiche 'undefined' car 'x' n'est pas encore défini.
var x = 5; // 'x' est maintenant défini avec la valeur 5.

var x = 10; // 'x' est redéclaré et mis à jour avec la valeur 10.
var x = 20; // 'x' est redéclaré et mis à jour avec la valeur 20.
console.log(x); // Affiche 20.

// 'let' ne peut pas être redéclaré, mais peut être mis à jour.
let y = 10;
let y = 5; // Erreur : 'y' ne peut pas être redéclaré.
y = 50; // Mise à jour : 'y' prend la valeur 50.

//-----------------------
// Portée des variables :
// Les variables définies dans une fonction (portée locale) ne sont pas accessibles en dehors de cette fonction (portée globale).
function test() {
  let z = 10; // 'z' est défini dans la fonction et n'est accessible qu'ici.
  console.log(y); // Erreur : 'y' est défini après cette ligne dans la fonction.
  let y = 20; // 'y' est défini dans la fonction et n'est accessible qu'ici.
}

test();
console.log(z); // Erreur : 'z' n'est pas défini dans la portée globale.

//-----------------------
// Structure conditionnelle : Utilisation de 'if-else' pour choisir entre deux options.

function checkAge(age) {
  if (age < 18) {
    return 'Désolé, vous êtes trop jeune.';
  } else {
    return 'Youpi! Vous êtes assez vieux!';
  }
}

console.log(checkAge(21)); // Affiche le message pour les plus de 18 ans.

//-----------------------
// Paramètres par défaut : Si aucun argument n'est passé à la fonction, un paramètre par défaut est utilisé.

function hello(name = 'monde') {
  console.log('Bonjour ' + name);
}

hello(); // Affiche 'Bonjour monde'.

//-----------------------
// Opérateur ternaire : Une manière raccourcie d'écrire des conditions simples.

function checkAge(age) {
  return age > 18 ? 'a plus de 18 ans' : "n'a pas plus de 18 ans";

  // Le même code avec 'if-else' :
  if (age > 18) {
    return 'a plus de 18 ans';
  } else {
    return "n'a pas plus de 18 ans";
  }
}

console.log(checkAge(21)); // Utilise l'opérateur ternaire.

//-----------------------
// Fonctions fléchées : Syntaxe simplifiée pour écrire des fonctions.

const KGtoG = (num) => num * 1000; // Multiplie un nombre en kg pour le convertir en grammes.

const calc = (num1, num2, op) =>
  op === '+'
    ? num1 + num2 // Additionne si l'opérateur est '+'.
    : op === '-'
      ? num1 - num2 // Soustrait si l'opérateur est '-'.
      : op === '*'
        ? num1 * num2 // Multiplie si l'opérateur est '*'.
        : 'opération invalide'; // Retourne une erreur pour toute autre opération.

//-----------------------
// Fonctions imbriquées : Vous pouvez avoir des fonctions à l'intérieur d'autres fonctions.

function funcOut(x) {
  function funcIn(y) {
    return x + y;
  }
  return funcIn;
}

let funcOut3 = funcOut(3); // 'funcOut' retourne 'funcIn' avec 'x' fixé à 3.
console.log(funcOut3(5)); // Appelle 'funcIn' avec 'y' fixé à 5, retourne 8.

//-----------------------
// Modifications d'objets : Ajouter ou modifier des propriétés d'objets.

const obj = {
  key: 'valeur',
};

console.log(obj.key); // Accès à la valeur de la clé 'key'.

obj.key = 'valeur2'; // Modifier la valeur de 'key'.
obj.name = 'Nadav'; // Ajouter une nouvelle clé 'name'.

let prop = 'age';
obj[prop] = 26; // Ajoute la clé 'age' avec la valeur 26.

console.log(obj); // Affiche l'objet modifié.
