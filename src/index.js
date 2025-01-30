import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Navbar from './Navbar';
//import './Navbar.css'; 

function TodoList () {
  const [ tasks, setTasks] = useState([]);
  const [ inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  

  return (

    

    <div className="container">
      
      <header className = "App-header"></header>
      <h1>Todo list</h1>
      <input
        type = "text"
        value={inputValue}
        onChange = {handleInputChange}
        placeholder = "Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="delete-button" onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);


/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function TodoList() {
  return (
    <>
    <div className="container">
      <h1>My Simple Todo List</h1>
      <p>This is a static paragraph that will always appear.</p>
    </div>

    <div className="container"> 
      <h1> hi </h1>
    </div>
    <div className="container"> 
      <h2> hi xcxz</h2>
    </div>
    </>
  );
}
function terst (){

  return(
    <h1>hellloooooo</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);

*/


/*

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function TodoList(){
  //const [tasks, setTasks] = useState ([]);
  //const [inputValue, setInputValue] = useState ('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className="container">
      <header className="App-header'=">
        <h1> To do List </h1>
        <input
          type="text"
          value = {inputValue}
          onChange = {handleInputChange}
          placeholder="enter a task"
          />

      </header>

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);
*/

