import React, { useState } from 'react';
import CounterWrapper from './CounterWrapper';

export default function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Component</h1>
      <CounterWrapper count={count} setCount={setCount} />
    </div>
  );
}
