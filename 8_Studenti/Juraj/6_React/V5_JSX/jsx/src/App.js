import logo from './logo.svg';
import './App.css';

function App() {

  const name = "Ivan";

  const user = {
    firstName: "Luka",
    lastName: "Lukač"
  };

  const userOutput = `${user.firstName} - ${user.lastName}`;

  const mojaFunkcija = (ime, prezime) => {
    return `Ime: ${ime}, prezime: ${prezime}`;
  };

  return (
    <div className="App">
      <p>Vježba 5 JSX</p>
      <p>Moje ime je: {name}</p>
      <p>Moje ime je {user.firstName}, a prezime je {user.lastName}</p>
      <p>Moje ime i prezime je : {userOutput}</p>
      {mojaFunkcija(user.firstName, user.lastName)}
    </div>
  );
}

export default App;
