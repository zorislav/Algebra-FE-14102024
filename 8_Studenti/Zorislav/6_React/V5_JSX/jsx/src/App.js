import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Ivan";

  const user = {
    firstName: "Luka",
    lastName: "Lukac",
  };

  const userOutput = `${user.firstName} - ${user.lastName}`;

  const mojaFunkcija = (ime, prezime) => {
    return `Ime: ${ime}, prezime: ${prezime}`;
  };

  return (
    <div className="App">
      <p>Vjezba 5 JSX</p>
      <p>Moje ime je: {name}</p>
      <p>
        Moje ime je {user.firstName} a prezime je {user.lastName}
      </p>
      <p>Moje ime i prezime je: {userOutput}</p>
      <p>{mojaFunkcija(user.firstName, user.lastName)}</p>
    </div>
  );
}

export default App;
