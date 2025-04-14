import { groceriesStore } from "../store/groceries-store";

export default function Grocery({name}){
    
    function onClickHandler(){
        groceriesStore.deleteGrocery(name);
    }

    return(
        <p onClick={onClickHandler}>{name}</p>
    );
}