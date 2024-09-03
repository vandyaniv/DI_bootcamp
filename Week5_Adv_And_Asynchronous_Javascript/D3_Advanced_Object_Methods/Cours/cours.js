
//const { clé1, sousObjet: { sousClé1, sousClé2 = valeurParDéfaut } } = objet;

class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return `Hello ${this.name}`;
  }
}

// Exemple d'utilisation :
const user = new User("John");
console.log(user.name); // Affichera "Hello John"