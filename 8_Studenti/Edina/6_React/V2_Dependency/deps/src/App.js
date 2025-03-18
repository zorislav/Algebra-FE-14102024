import randomstring from "randomstring";
import "./App.css";

function App() {
  const mojString = randomstring.generate({
    charset: "alphanumeric",
    length: "5",
  });

  return (
    <div className="App">
      <p>Moj random string je: {mojString} </p>
    </div>
  );
}

export default App;
