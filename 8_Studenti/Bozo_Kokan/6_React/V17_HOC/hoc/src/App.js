import './App.css';

function MyButton(props){
  return (
    <button {...props}></button>
  )
}

function withColor(Element){
  return function({boja, ...otherProps}){
    return(
      <Element {...otherProps} style={{backgroundColor: boja}}/>
    )
  }  
}

const ColoredElement = withColor(MyButton);

function App() {
  return (
    <div className="App">
      <h1 style={styles.h1still}>Hello World!</h1>
      <h2 style={{color: "yellow", background: "green"}}>Hello World!</h2>
      <ColoredElement boja="red"> Bok ja san crven</ColoredElement>
      <ColoredElement boja="green"> Bok ja san zelen</ColoredElement>
    </div>
  );
}

export default App;

const styles = {
  h1still: {
    color: "blue",
    backgroundColor: "lightgray"
  }
}