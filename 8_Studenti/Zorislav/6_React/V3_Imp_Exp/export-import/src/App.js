import "./App.css";

import Person from "./util/data.js";
import { suma } from "./util/functions.js";
import { broj1, broj2 } from "./util/const.js";

import Osoba from "./util/data.js";
import { suma as zbroj } from "./util/functions.js";
import * as brojevi from "./util/const.js";

function App() {
  return (
    <div className="App">
      <p>{Person.name}</p>
      <p>{suma(5, 3)}</p>
      <p>{suma(broj1, broj2)}</p>
      <p>{Osoba.name}</p>
      <p>{zbroj(brojevi.broj1, brojevi.broj2)}</p>
    </div>
  );
}

export default App;
