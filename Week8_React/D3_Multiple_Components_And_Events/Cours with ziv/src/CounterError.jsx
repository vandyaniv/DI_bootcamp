import React from 'react';

export default function CounterError({ count, setCount }) {
  if (count > 5) {
    throw new Error('Oups, le compteur est supérieur à 5 !');
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
}
