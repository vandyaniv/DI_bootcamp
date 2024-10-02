// import React from 'react';
// import data from '../data.json';

// // here miss the 3 exemple

//  export default Example3;

import React from 'react';
import data from '../data.json';

class Example3 extends React.Component {
  render() {
    return (
      <div>
        <h2>Work Experiences</h2>
        {data.Experiences.map((experience, index) => (
          <div key={index}>
            <h3>{experience.companyName}</h3>
            <img src={experience.logo} alt={`${experience.companyName} logo`} style={{ width: '100px' }} />
            <a href={experience.url} target="_blank" rel="noopener noreferrer">
              Company Website
            </a>
            {experience.roles.map((role, roleIndex) => (
              <div key={roleIndex}>
                <h4>{role.title}</h4>
                <p>{role.description}</p>
                <p>
                  {role.startDate} - {role.endDate}
                </p>
                <p>Location: {role.location}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
