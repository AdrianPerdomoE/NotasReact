import React from 'react';
import logo from "./images/logo.avif"
import './App.css';
import { Button } from './components/Button'
import { Display } from './components/Display';
import { ButtonClear } from './components/ButtonClear';
import { useState } from "react";
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const addInput = (val: string) => {
    if (val === "Clear") {
      setInput("");
    }
    else if (val === "=") {
      setInput(input ? evaluate(input) : '');
    }
    else {
      setInput(input + val)
    }
  }
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="Logo" className='logo' />
      </div>
      <div className="calculator-container">
        <Display
          input={input} />
        <div className="row">
          <Button
            click={addInput}>1</Button>
          <Button
            click={addInput}>2</Button>
          <Button
            click={addInput}>3</Button>
          <Button
            click={addInput}>+</Button>
        </div>
        <div className="row">
          <Button
            click={addInput}>4</Button>
          <Button
            click={addInput}>5</Button>
          <Button
            click={addInput}>6</Button>
          <Button
            click={addInput}>-</Button>
        </div>
        <div className="row">
          <Button
            click={addInput}>7</Button>
          <Button
            click={addInput}>8</Button>
          <Button
            click={addInput}>9</Button>
          <Button
            click={addInput}>*</Button>
        </div>
        <div className="row">
          <Button
            click={addInput}>=</Button>
          <Button
            click={addInput}>0</Button>
          <Button
            click={addInput}>.</Button>
          <Button
            click={addInput}>/</Button>
        </div>
        <div className="row">
          <ButtonClear
            click={addInput}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
