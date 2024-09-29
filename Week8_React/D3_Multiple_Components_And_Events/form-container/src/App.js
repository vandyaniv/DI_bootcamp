import React, { useState } from 'react';
import FormComponent from './FormComponent';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    lactoseFree: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryString = new URLSearchParams(formData).toString();
    window.location.href = `http://localhost:3000/?${queryString}`;
  };

  return (
    <div>
      <h1>Form Container</h1>
      <FormComponent formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
