// import React from 'react';
import './Exercise.css';

function Exercise() {
  const style_header = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Arial',
  };

  return (
    <div>
      <h1 style={{ style_header }}>This is a Header </h1>
      <p>This is a paragraph</p>
      <a href="https://via.placeholder.com">This is a link</a>
      <h2> this is a Form </h2>
      <form>
        <p>Enter your name </p>
        <input type="text" placeholder="Enter something" />
        <button type="submit">Submit</button>
      </form>

      <p className="para"> Here is an image </p>
      <img src="https://via.placeholder.com/150" alt="Placeholder" />

      <p>There is the list </p>
      <ul>
        <li>coffe</li>
        <li> Milk </li>
        <li> thea </li>
      </ul>
    </div>
  );
}
export default Exercise;
