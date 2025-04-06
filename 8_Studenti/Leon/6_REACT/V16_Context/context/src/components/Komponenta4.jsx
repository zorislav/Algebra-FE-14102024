import { useContext, useState } from "react";
import { Consumer } from "../context/context";
import Context from "../context/context";

export default function Komponenta4() {
  const mojKontekst = useContext(Context);
  const [br, setBr] =useState(0);

  const { text, number, reset } = mojKontekst;

  const mojTekst = `${text} i ${number} su poslani preko useContext`;

  function handleChangeBr(event){
    setBr(event.target.value);
  }

  return (
    <>
      <h2>Komponenta4</h2>
      <Consumer>{(ctx) => <p>{ctx.text}</p>}</Consumer>
      <p>{mojTekst}</p>
      <label htmlFor="br">Novi broj: </label>
      <input id="br" type="number" value={br} onChange={handleChangeBr}/>
      <button onClick={()=>reset(br)}>Reset</button>
    </>
  );
}
