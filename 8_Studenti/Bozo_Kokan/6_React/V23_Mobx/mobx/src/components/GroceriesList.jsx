import { observer } from 'mobx-react';
import { groceriesStore } from '../store/groceries-store';
import Grocery from './Grocery';

export const GroceriesList = observer(() => {
    
    const myGroceries = groceriesStore.getGroceries;

    return (
        <>
        <p>groceries list total : {myGroceries.length}</p>
        <ul>
            {
                myGroceries.map((groc,ind) => <li> <Grocery name={groc} /> </li>)
            }
        </ul>
        </>
    );
});