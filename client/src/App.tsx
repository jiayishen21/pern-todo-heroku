import React, { Fragment } from 'react';

import './App.css';

import { InputTodo } from './components/inputTodo';
import { List } from './components/list';


function App() {
  return (
    <div className="app">
      <InputTodo />
      <List />
    </div>
  );
}

export default App;
