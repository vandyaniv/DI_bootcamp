// chaine vide

/*let patt = '';
// on a la chaine vide le but c est d'ajouter

for (let i = 1; i <= 6; i++) {
  patt += '*';
}

console.log(patt);*/


let pattern = "";

for (let i = 1 <= 6; i++) {
  for (let j = 1; j <= i; j++){
    pattern += '*';

  }
  pattern += '\n'
}

console.log(pattern);


// boucle dans boucle = une premier qui tourne a vide 
// une segond qui dans chaque tour ajout un 