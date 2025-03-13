import logo from "./logo.svg";
import "./App.css";
import {
  Komponenta1,
  Komponenta2,
  Komponenta3,
  Komponenta4,
} from "./Components";

function App() {
  return (
    <div className="App">
      <p>Ovo ispisuje moja glavna komponenta</p>
      <Komponenta1 />
      <Komponenta2 />
      <Komponenta3 />
      <Komponenta4 />
    </div>
  );
}

export default App;
