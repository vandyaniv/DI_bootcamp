import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3006/api/hello');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return <div>{data ? <p>{JSON.stringify(data)}</p> : <p>Loading...</p>}</div>;
}

export default MyComponent;
