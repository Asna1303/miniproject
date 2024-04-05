import React from 'react';
import Navbar from '../component/navbar/navbar';

const TodoList = () => {
  const reg = JSON.parse(localStorage.getItem('reg')) || [];

  const handleDelete = (index) => {
    const updatedRegistrations = [...reg];
    updatedRegistrations.splice(index, 1);
    localStorage.setItem('reg', JSON.stringify(updatedRegistrations));
    window.location.reload(); // Refresh he page to reflect the updated table
  };

  return (
    <div>
    <Navbar/>
      <h2>Latest events</h2>
      <table>
        <thead>
          <tr>
            
          </tr>
        </thead>
        <tbody>
          {reg.map((registration, index) => (
            <tr key={index}>
              <td>{registration.name}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
