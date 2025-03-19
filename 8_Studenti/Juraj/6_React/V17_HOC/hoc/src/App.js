
import './App.css';

function Button(props) {
  return <button {...props}></button>
}

function withColor(Element) {
  return function({boja, ...otherProps}){
    return <Element {...otherProps} style={{backgroundColor: boja}} />
  }
};

const ColoredElement = withColor(Button)

function App() {
  return (
    <div className="App">
     <h1 style={styles.h1stil}>Hello</h1>
     <h1 style={{color: "yellow", backgroundColor: "green"}}>Hello again</h1>
     <ColoredElement boja="red">Ja sam crven</ColoredElement>
      <ColoredElement boja="green">Ja sam zelen</ColoredElement>
    </div>
  );
}

export default App;


const styles = {
  h1stil: {
    color: "blue", 
    backgroundColor: "lightGray",
  },
};