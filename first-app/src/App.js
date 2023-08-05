
import './App.css';
import Testimony from './components/Testimony';
import { Caracters } from './Data/Caracters';

function App() {
  return (
    <div className="App">
      <div className='principal-container'>
        <h1>
          These are the best Assassins in the history of the assassin's creed saga
        </h1>
        {Caracters.map(caracter => {
          return (
            <Testimony
              img={caracter.img}
              name={caracter.name}
              cargo={caracter.cargo}
              text={caracter.text}
            />)
        })}
      </div>
    </div>
  );
}

export default App;
