import { useState } from 'react';
import Garage from './Garage';

function Car({ carinfo }) {
  const [color, setState] = useState('red'); // [1, 2] = useState ()

  return (
    <div>
      <h2>
        This car is {color} {carinfo.model}
      </h2>
      <Garage size="small" />
    </div>
  );
}

export default Car;
