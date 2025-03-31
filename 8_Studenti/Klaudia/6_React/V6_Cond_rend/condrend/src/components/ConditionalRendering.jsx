export default function ConditionalRendering({ broj }){
    const isLodaing = true;

    const mojText = broj === 2 ? <p>Dobio sam 2</p> : null;

   let noviText = <p>Niti 2 niti 3</p>;

    if (broj === 2){
        noviText = <p>Dobio sam 2</p>;
    } else if(broj ===3){
        noviText = <p>Dobio sam 3</p>;
    } 

    return (
        <>
        <h2>Conditional rendering Komponenta</h2>
        <p>Broj: {broj}</p>
        {isLodaing && <p>Dobio sam broj 1</p>}
        {broj === 1 && <p>Dobio sam broj 1</p>}
        {mojText}
        {noviText}
        </>
    );
}