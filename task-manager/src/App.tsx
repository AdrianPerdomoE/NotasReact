import React from 'react';
import logo from './images/logo.jpg';
import './App.css';
import { TaskList } from './components/TaskList';
function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="Logo" className='logo' />
      </div>

      <div className="task-list">
        <h1>My tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
