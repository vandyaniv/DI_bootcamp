import React from 'react';
import CounterError from './CounterError';

// eslint-disable-next-line react/prop-types
export default function CounterWrapper({ count, setCount }) {
  return (
    <div>
      <h2>Counter Wrapper</h2>
      <CounterError count={count} setCount={setCount} />
    </div>
  );
}
