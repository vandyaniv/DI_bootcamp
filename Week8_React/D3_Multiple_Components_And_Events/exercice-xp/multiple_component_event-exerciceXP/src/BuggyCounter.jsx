// src/BuggyCounter.jsx
import React from 'react';

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error('I CRASHED!');
    }

    return (
      <>
        <button onClick={this.handleClick}>Click here</button>
        <p>Counter: {this.state.counter}</p>
      </>
    );
  }
}

export default BuggyCounter;
