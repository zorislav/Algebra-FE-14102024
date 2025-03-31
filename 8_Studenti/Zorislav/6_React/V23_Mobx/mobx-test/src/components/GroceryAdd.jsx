import { useState } from "react";
import { groceriesStore } from "../store/groceries-store";

export default function GroceryAdd() {
  const [grocery, setGrocery] = useState("");

  function groceryChangeHandler(event) {
    setGrocery(event.target.value);
  }

  function groceryAddHandler() {
    // spremiti grocery u globalno stanje
    groceriesStore.addGrocery(grocery);
    setGrocery("");
  }

  return (
    <>
      <label htmlFor="grocery">Grocery:</label>
      <input
        type="text"
        id="grocery"
        value={grocery}
        onChange={groceryChangeHandler}
      />
      <button onClick={groceryAddHandler}>Add</button>
    </>
  );
}
