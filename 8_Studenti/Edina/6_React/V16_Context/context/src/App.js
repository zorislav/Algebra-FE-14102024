import { useState } from "react";
import Komponenta1 from "./components/Komponenta1";
import "./App.css";
import { Provider } from "./context/context";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <Provider value={{ text: "Komponenta 4 je najbolja", number: number }}>
        <h1>App komponenta</h1>
        <Komponenta1 />
      </Provider>
    </div>
  );
}

export default App;
