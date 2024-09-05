// // Tableau d'objets JavaScript
// let user = [
//   {
//     id: 1, 
//     name : "Leanne Grahim"
//   }
// ];

// // Conversion en JSON
// let userJson = JSON.stringify(user);  // Convertit l'objet en chaîne JSON
// console.log(userJson);  // Affiche la chaîne JSON

// // Chaîne JSON simple
// let str = '[{"hello: test": "hello: test2"}]';
// console.log(str);  // Affiche la chaîne JSON brute


// 1. Créer un objet JavaScript
let user = [
  {
    id: 1, 
    name: "Leanne Grahim",
    username: "Bret",
    email: "Sincere@april.biz",
    sum: (age, grade) => {
      return (age * grade) / 2;
    },
    password: "123456"  // Ce champ sera filtré
  }
];

// 2. Filtrer et convertir en JSON en excluant le mot de passe
const filterByJson = (key, value) => {
  if (key === "password") return undefined;  // Exclure le mot de passe
  return value;  // Conserver les autres propriétés
};

let userJson = JSON.stringify(user, filterByJson, 2);  // Convertir en JSON avec un identifiant pour la lisibilité
console.log(userJson);  // Affiche la version filtrée de l'objet en JSON

// 3. Analyser la chaîne JSON pour la convertir en objet JavaScript
let str = '[{"id":1,"name":"Leanne Grahim","username":"Bret","email":"Sincere@april.biz"}]';
let userFromJson = JSON.parse(str);  // Convertir la chaîne JSON en objet
console.log(userFromJson);  // Affiche l'objet reconverti