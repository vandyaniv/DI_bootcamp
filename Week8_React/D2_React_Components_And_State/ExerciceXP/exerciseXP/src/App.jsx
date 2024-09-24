import React, { useState } from 'react';
import Car from './Components/Car';

const carinfo = { name: 'Ford', model: 'Mustang' };

function App() {
  return (
    <div className="App">
      <Car carinfo={carinfo}></Car>
      <Events />
    </div>
  );
}

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(` you entered : ${event.target.value}`);
    }
  };

  const toogle = () => {
    setIsToggleOn((prevState) => !prevState);
  };

  return (
    <>
      <div>
        <button onClick={clickMe} style={{ color: 'red' }}>
          Click Me
        </button>
        <input type="text" placeholder="Press the ENTER key!" onKeyDown={handleKeyDown} />
        <button onClick={toogle}>{isToggleOn ? 'ON' : 'OFF'}</button>
      </div>
    </>
  );
}

export default App;
