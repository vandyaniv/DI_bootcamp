import React, { useState } from 'react';
/* eslint-disable */
import CounterButton from './CounterButton';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Compteurs synchronisés</h2>
      <CounterButton count={count} onClick={handleClick} />
      <CounterButton count={count} onClick={handleClick} />
    </div>
  );
}
