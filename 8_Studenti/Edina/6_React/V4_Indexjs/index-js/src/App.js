import logo from "./logo.svg";
import "./App.css";
import {
  Komponenta1,
  Komponenta2,
  Komponenta3,
  Komponenta4,
  broj,
} from "./Components";

function App() {
  return (
    <div className="App">
      <p>Ovo ispisuje moja glavna komponenta</p>
      <Komponenta1 />
      <Komponenta2 />
      <Komponenta3 />
      <Komponenta4 />
      <Komponenta5 />
    </div>
  );
}

function Komponenta5() {
  return <h5>Komponenta5</h5>;
}

export default App;
