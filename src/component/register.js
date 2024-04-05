import React, { useState } from 'react';
import Navbar from './navbar/navbar';
import "./register.css"
const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', contactNumber: '', registernumber: '', city: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
    registrations.push(formData);
    localStorage.setItem('registrations', JSON.stringify(registrations));
    setFormData({ name: '', email: '', contactNumber: '', registernumber: '', city: '' });
  };

  return (
    <div className='reg'>
    <Navbar/>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email   :
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
         Number:
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
         Reg No:
          <input type="text" name="registernumber" value={formData.registernumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          Status
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
