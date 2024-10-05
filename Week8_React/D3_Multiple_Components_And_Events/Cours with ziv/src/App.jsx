import React from 'react';

// export default function App() {
//   return (
//     <div>
//       <h1>Mon Application de Compteurs</h1>
//       <Counter />
//     </div>
//   );
// }  Second part of the cours after 11h30 here we do a formimport { useState } from 'react';

// // seconde part   2  t w o
// function App() {
//   const [name, setName] = useState('');
//   const [num, setNum] = useState(''); // Hook d'état pour le menu déroulant

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Empêche le rechargement de la page
//     console.log(name, num); // Affiche le nom et le numéro dans la console lors de la soumission
//   };

//   return (
//     <>
//       <h2>Forms in React</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="name"
//           placeholder="Name"
//           onChange={(e) => setName(e.target.value)} // Met à jour l'état avec le nom saisi
//         />
//         <br />

//         {/* Menu déroulant */}
//         <select name="num" onChange={(e) => setNum(e.target.value)}>
//           <option value="1">One</option>
//           <option value="2">Two</option>
//           <option value="3">Three</option>
//         </select>

//         <br />
//         <input type="submit" value="Submit" />
//       </form>
//     </>
//   );
// }

// export default App;

//l’instructeur montre une approche différente pour gérer les formulaires dans React, en utilisant un seul état (useState) pour stocker plusieurs champs de formulaire dans un objet.

import { useState } from 'react';

function App() {
  // Utiliser un seul état pour stocker toutes les valeurs du formulaire
  const [inputs, setInputs] = useState({
    name: '',
    num: 0,
    text: '',
  });

  // Fonction pour gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs, // On garde les autres valeurs de l'objet intactes
      [name]: value, // On met à jour uniquement le champ modifié
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs); // Affiche tout l'objet avec les valeurs actuelles
  };

  return (
    <>
      <h2>Forms in React</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name" // L'attribut "name" est important pour identifier le champ
          placeholder="Name"
          onChange={handleChange}
        />
        <br />
        <input name="num" type="number" placeholder="Number" onChange={handleChange} />
        <br />
        <textarea name="text" placeholder="Text" onChange={handleChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;

//
