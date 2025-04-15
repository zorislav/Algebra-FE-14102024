import { observer } from "mobx-react";
import { groceriesStore } from "../store/groceries-store";
import Grocery from "./Grocery";

export const GroceriesList = observer(() => {
  const myGroceries = groceriesStore.getGroceries;

  return (
    <>
      <p>Groceries List - Total: {myGroceries.length}</p>
      <ul>
        {myGroceries.map((groc, ind) => (
          <li key={ind}>
            <Grocery name={groc} />
          </li>
        ))}
      </ul>
    </>
  );
});
