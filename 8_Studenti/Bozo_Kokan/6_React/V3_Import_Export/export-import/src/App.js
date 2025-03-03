
import './App.css';

import suma from "./util/function.js";
import { broj1, broj2 } from "./util/const.js";
import Person from "./util/data.js";

import Osoba from "./util/data.js";
import {suma as zbroj} from "./util/function.js";
import * as brojevi from "./util/const.js";

function App() {

  return (
    <div className="App">
      <p>{Osoba}</p>
      <p>{Person}</p>
      <p> Zbroj je: {suma(broj1, broj2)}</p>
      <p>{zbroj(brojevi.broj1, brojevi.broj2)}</p>
    </div>
  );
}

export default App;
