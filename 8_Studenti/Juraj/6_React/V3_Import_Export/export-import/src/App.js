
import './App.css';
import { broj1, broj2 } from './util/const';
import Person from './util/data';
import { suma } from './util/functions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          {Person.name}

        </p>
        <p>{suma(5,3)}</p>
        <p>{suma(broj1,broj2)}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
