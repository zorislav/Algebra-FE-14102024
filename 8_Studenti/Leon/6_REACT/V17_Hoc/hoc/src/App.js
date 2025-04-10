import "./App.css";

function MyButton(props) {
  return <button {...props}></button>;
}

function withColor(Element) {
  return function ({ boja, ...otherProps }) {
    return <Element {...otherProps} style={{ backgroundColor: boja }} />;
  };
}

const ColoredElement = withColor(MyButton);

function App() {
  return (
    <div className="App">
      <h1 style={styles.h1stil}>Hello</h1>
      <h2 style={{ color: "yellow", backgroundColor: "green" }}>Hello again</h2>
      <ColoredElement  boja="red">Bok ja sam crven</ColoredElement>
      <ColoredElement boja="green">Bok ja sam zelen</ColoredElement>
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
