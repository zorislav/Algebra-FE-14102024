export default function ConditionalRendering({ broj }){

  // const isLoading = true; ako se loada prikazuje se nesto ide u conditional uvjet {broj === 1 && <p>Dobio sam broj {broj}</p>}

  return (
      <>
      <h2>Conditional Rendering Component</h2>
      <p>Broj: {broj}</p>
      {broj && <p>Dobio sam broj {broj}</p>}
      </>
  )
}
