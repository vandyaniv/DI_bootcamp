import React from 'react';

export default function CounterButton({ count, onClick }) {
  return <button onClick={onClick}>Cliqué {count} fois</button>;
}
