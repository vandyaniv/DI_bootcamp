import React from 'react';
import data from '../data.json';

class Example1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Social Media</h2>
        <ul>
          {data.SocialMedias.map((url, index) => (
            <li key={index}>
              <a href={url}>{url}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
