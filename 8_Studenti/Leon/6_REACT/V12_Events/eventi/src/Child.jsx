export default function Child({ parentMsg, parentFn }) {
  const messageFromChild = "Da, mama!";

  return (
    <>
      <h3>Message from parent: {parentMsg}</h3>
      <button onClick={()=>parentFn(messageFromChild)}>Poruci mami</button>
    </>
  );
}
