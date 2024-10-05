import { useState } from 'react';

const calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const [result, setResult] = useState(null);

  const add = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
  };
};
