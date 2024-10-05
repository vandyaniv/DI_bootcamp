import React from 'react';

const Input = (props) => {
  return (
    <div>
      <h2>Input</h2>
      <input type="text" value={props.value} onChange={(e) => props.onInputChange(e.target.value)} />
    </div>
  );
};

export default Input;
