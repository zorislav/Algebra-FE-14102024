import "./App.css";
import { suma } from "./util/functions.js";
import { broj1, broj2 } from "./util/const.js";

import Person from "./util/data";
import Osoba from "./util/data.js"; //isto je person, ovo je export default pa moze tako
import { suma as zbroj } from "./util/functions.js";
import * as brojevi from "./util/const.js";

function App() {
  return (
    <div className="App">
      <p>{Person.name}</p>
      <p>{suma(5, 4)}</p>
      <p>{suma(broj1, broj2)}</p>
      <p>{Osoba.name}</p>
      <p>{zbroj(brojevi.broj1, brojevi.broj2)}</p>
    </div>
  );
}

export default App;
