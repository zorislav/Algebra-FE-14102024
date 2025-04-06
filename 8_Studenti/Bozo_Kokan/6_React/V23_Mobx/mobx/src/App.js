import './App.css';
import  GroceryAdd  from './components/GroceryAdd.jsx';
import { GroceriesList } from './components/GroceriesList.jsx';

function App() {
  return (
    <div className="App">
      <h1>My Groceries - Powered by Mobx!</h1>
      <GroceryAdd />
      <GroceriesList />
      <p>GroceryList</p>
    </div>
  );
}

export default App;
