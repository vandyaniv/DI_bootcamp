import React from 'react';

function FormComponent({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
      <br />
      <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
      <br />
      <input type="number" placeholder="Age" name="age" value={formData.age} onChange={handleChange} />
      <br />
      <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} /> Male
      <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} /> Female
      <br />
      <select name="destination" value={formData.destination} onChange={handleChange}>
        <option value="">Select destination</option>
        <option value="Japan">Japan</option>
        <option value="Germany">Germany</option>
        <option value="Brazil">Brazil</option>
      </select>
      <br />
      <input type="checkbox" name="lactoseFree" checked={formData.lactoseFree} onChange={handleChange} /> Lactose Free?
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
