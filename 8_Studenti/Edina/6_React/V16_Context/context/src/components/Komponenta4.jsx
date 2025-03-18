import { useContext } from "react";
import { Consumer } from "../context/context";
import Context from "../context/context";

export default function Komponenta4() {
  const mojKontekst = useContext(Context);

  const { text, number, reset } = mojKontekst;

  const mojText = `${text} i ${number} su poslani preko useContext.`;
  return (
    <>
      <h2>Komponenta 4</h2>
      <Consumer>{(ctx) => <p>{ctx.text}</p>}</Consumer>
      <p>{mojText}</p>
      <button onClick={reset}>Reset</button>
    </>
  );
}
