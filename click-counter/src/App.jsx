
import './App.css';
import logo from "./images/logo.png"
import { Button } from './components/Button';
import { Counter } from './components/Counter';
import { useState } from 'react';
function App() {
  const [numClicks, setNumClicks] = useState(0);
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} className='logo' alt="Logo" />
      </div>
      <div className="principal-container">
        <Counter numClicks={numClicks} />
        <Button
          texto="Click"
          isClickButton={true}
          onClickFunction={() => { setNumClicks(numClicks + 1) }}
        />
        <Button
          texto="Reset"
          isClickButton={false}
          onClickFunction={() => { setNumClicks(0) }}
        />
      </div>
    </div>
  );
}

export default App;
