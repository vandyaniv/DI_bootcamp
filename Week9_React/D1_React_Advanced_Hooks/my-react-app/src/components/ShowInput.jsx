import React from 'react';

const ShowInput = (props) => {
  return (
    <div>
      <h2>ShowInput</h2>
      <input type="text" value={props.value} onChange={(e) => props.onInputChange(e.target.value)} />
    </div>
  );
};

export default ShowInput;
