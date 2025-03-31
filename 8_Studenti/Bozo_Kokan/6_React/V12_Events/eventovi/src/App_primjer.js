import './App.css';
import { useState } from 'react';
import Child from './primjer_zadatka/Child';

function App() {

  const messageFromParent = "Budi dobar";
  const [counter,setCounter] = useState(0);
  const [childText, setChildText] = useState("");

  function onClickHandler(){
    setCounter((prevState) => prevState+1);
  }
  function changeChildText(msg){
    setChildText(msg);
  }

  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <button onClick = {onClickHandler}>Increment counter</button>
      <h1> This is parent</h1>
      <h3> Message from child: {childText}</h3>
      <Child parentMsg = {messageFromParent} parentFn = {changeChildText}/>
    </div>
  );
}

export default App;
