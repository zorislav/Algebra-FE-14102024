import { useState } from "react";
import Komponenta1 from "./components/Komponenta1";
import "./App.css";
import { Provider } from "./context/context";

function App() {
  const [number, setNumber] = useState(0);

  function numberChangeHandler(event) {
    setNumber(event.target.value);
  }

  return (
    <div className="App">
      <Provider
        value={{
          text: "Komponenta 4 je najbolja",
          number: number,
          reset: (noviBroj) => setNumber(noviBroj),
        }}
      >
        <h1>App Komponenta</h1>
        <label htmlFor="broj">Postavi u kontekst:</label>
        <input
          id="broj"
          value={number}
          type="number"
          onChange={numberChangeHandler}
        />
        <Komponenta1 />
      </Provider>
    </div>
  );
}

export default App;
