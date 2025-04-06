import randomstring from "randomstring";
import "./App.css";

function App() {
  const mojString = randomstring.generate({
    charset: "alphanumeric",
    length: 6,
  });

  return (
    <div className="App">
      <p>Moj random string je: {mojString}</p>
    </div>
  );
}

export default App;
