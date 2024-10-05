import React from 'react';

const ShowCounter = () => {
  const count = 5; // Cette valeur est codée en dur ici pour reproduire la capture d'écran

  return (
    <div>
      <h2>ShowCounter</h2>
      <h1>{count}</h1> {/* Affichage du compteur */}
    </div>
  );
};

export default ShowCounter;
