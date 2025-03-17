import { useContext } from "react";
import Context from "../context/context";
import { Consumer } from "../context/context";

 function Komponenta4() {

  const mojKontekst =  useContext(Context);

  const { text, number, reset } = mojKontekst;

const mojTekst = `${text} i ${number} su poslani preko useContext`;

return (

    <>
    <h2>Komponenta 4</h2>
        <Consumer>
            {ctx => <p>{ctx.text}</p>}
        </Consumer>
        <p>{mojTekst}</p>
        <btn onClick={reset}>Reset</btn>
    
    </>

    );

    }
    export default Komponenta4;
    