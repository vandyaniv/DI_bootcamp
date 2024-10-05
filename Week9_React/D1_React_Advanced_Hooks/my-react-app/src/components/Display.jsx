import React, { useState } from 'react';
import ShowCounter from './ShowCounter';
import Input from './Input';

const Display = () => {
  const [input, setInput] = useState(''); // Gestion de l'état du champ input

  return (
    <div>
      <h2>Display</h2>
      <ShowCounter />
      <Input value={input} onInputChange={setInput} />
      <p>Input value: {input}</p> {/* Affichage de la valeur entrée */}
    </div>
  );
};

export default Display;
