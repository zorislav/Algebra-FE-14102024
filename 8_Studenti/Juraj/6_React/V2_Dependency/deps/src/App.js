import randomstring from 'randomstring';
import './App.css';

function App() {

  const mojString = randomstring.generate({
    charset: "alphanumeric",
    length: 6
  });
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Moj random string je: {mojString}
        </p>
      
      </header>
    </div>
  );
}

export default App;
