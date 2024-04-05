import React, { useState,useEffect } from 'react';
import Adminnavbar from './adminnavbar';
const AluminiAdmin = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [age, setAge] = useState('');
  const [words, setWords] = useState('');
  const [marks, setMarks] = useState('');

  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editName, setEditName] = useState('');
  const [editTime, setEditTime] = useState('');
  const [editAge, setEditAge] = useState('');
  const [editWords, setEditWords] = useState('');
  const [editMarks, setEditMarks] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleWordsChange = (e) => {
    setWords(e.target.value);
  };

  const handleMarksChange = (e) => {
    setMarks(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodo = {
      title: title,
      name: name,
      time: time,
      age: age,
      words: words,
      marks: marks,
    };

    setTodos([...todos, newTodo]);
    setTitle('');
    setName('');
    setTime('');
    setAge('');
    setWords('');
    setMarks('');
  };

  const handleEdit = (index) => {
    const todoToEdit = todos[index];
    setEditIndex(index);
    setEditTitle(todoToEdit.title);
    setEditName(todoToEdit.name);
    setEditTime(todoToEdit.time);
    setEditAge(todoToEdit.age);
    setEditWords(todoToEdit.words);
    setEditMarks(todoToEdit.marks);
  };

  const handleUpdateTodo = () => {
    const updatedTodo = {
      title: editTitle,
      name: editName,
      time: editTime,
      age: editAge,
      words: editWords,
      marks: editMarks,
    };

    const updatedTodos = [...todos];
    updatedTodos[editIndex] = updatedTodo;

    setTodos(updatedTodos);
    setEditIndex(null);
    setEditTitle('');
    setEditName('');
    setEditTime('');
    setEditAge('');
    setEditWords('');
    setEditMarks('');
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditTitle('');
    setEditName('');
    setEditTime('');
    setEditAge('');
    setEditWords('');
    setEditMarks('');
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
<Adminnavbar/>
      <div className='inarea'>
        <input type="text" value={title} onChange={handleTitleChange} placeholder="NAME"/>
        <input type="text" value={name} onChange={handleNameChange} placeholder="COMPANY" />
        <input type="text" value={time} onChange={handleTimeChange} placeholder="CTC" />
        <input type="text" value={age} onChange={handleAgeChange} placeholder="DEPARTMENT" />
        <input type="text" value={words} onChange={handleWordsChange} placeholder="BATCH" />
        <input type="text" value={marks} onChange={handleMarksChange} placeholder="REMARKS" />
        <button onClick={handleAddTodo}>SUBMIT</button>
      </div>
<div  className='uli'>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
                <input type="text" value={editTime} onChange={(e) => setEditTime(e.target.value)} />
                <input type="text" value={editAge} onChange={(e) => setEditAge(e.target.value)} />
                <input type="text" value={editWords} onChange={(e) => setEditWords(e.target.value)} />
                <input type="text" value={editMarks} onChange={(e) => setEditMarks(e.target.value)} />
                <button onClick={handleUpdateTodo}>Update</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <div className='displaydata'>
                <p>{todo.title}</p>
                <p>{todo.name}</p>
                <p>{todo.time}</p>
                <p>{todo.age}</p>
                <p>{todo.words}</p>
                <p>{todo.marks}</p>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default AluminiAdmin;
