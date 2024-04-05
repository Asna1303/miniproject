import React, { useState } from 'react';
import Adminnavbar from './adminnavbar';
import "./portal.css"
const TodoAdder = () => {
  const [formData, setFormData] = useState({ name: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reg = JSON.parse(localStorage.getItem('reg')) || [];
    reg.push(formData);
    localStorage.setItem('reg', JSON.stringify(reg));
    setFormData({ name: '' });
  };

  return (
    <div className='regi'>
    <Adminnavbar/>
      <h2>Add Latest information</h2>
      <form onSubmit={handleSubmit}>
        <label>
         
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
 
       
        <br />   <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoAdder;
