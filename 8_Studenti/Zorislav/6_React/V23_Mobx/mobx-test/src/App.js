import GroceryAdd from "./components/GroceryAdd";
import { GroceriesList } from "./components/GroceriesList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My Groceries - Powered by Mobx!</h1>
      <GroceryAdd />
      <GroceriesList />
    </div>
  );
}

export default App;
