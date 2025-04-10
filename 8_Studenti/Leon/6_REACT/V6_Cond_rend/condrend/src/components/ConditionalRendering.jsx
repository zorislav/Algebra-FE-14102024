export default function ConditionalRendering({ broj }) {
  const isLoading = true;

  const mojText = broj === 2 ? <p>Dobio sam 2</p> : null;

  let noviText = <p>Niti 2 niti 3</p>;

  if (broj === 2) {
    noviText = <p>Dobio sam 2</p>;
  } else if (broj === 3) {
    noviText = <p>Dobio sam 3</p>;
  }

  return (
    <>
      <h2>Conditionalrendering Komponenta</h2>
      <p>Broj: {broj}</p>
      {broj === 1 && <p>Dobio sam broj 1</p>}
      {isLoading && <p>Dobio sam broj 1</p>}
      {mojText}
      {noviText}
    </>
  );
}
