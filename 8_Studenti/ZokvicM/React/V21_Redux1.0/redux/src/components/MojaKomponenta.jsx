import { useSelector } from "react-redux";

export default function MojaKomponenta(){
    const brojac = useSelector(skladiste => skladiste.counter);

    return (
        <>
        <h2>Moja Komponenta</h2>
        <p>i moja komponenta koristi Redux store: {brojac} </p>
        </>
    );
}