export default function ConditionalRendering({broj}) {

    const mojTekst = broj === 2 ? <p>Dobio sam 2</p> : null;


    let noviTekst = <p>Niti 2 niti 3</p>

    if (broj === 2){
         noviTekst = <p>Dobio sam 2</p>;

    } else if (broj === 3) {
         noviTekst = <p>Dobio sam 3</p>;
    };


    return (
        <>
        <h2>Conditional Rendering Komponenta</h2>
        <p>Broj: {broj}</p>
        {broj === 1 && <p>Dobio sam broj 1</p>}
        {mojTekst}
        {noviTekst}
        </>
    );
}