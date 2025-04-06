import { groceriesStore } from "../store/groceries-store";
export default function Grocery({name}){

    function onClickHanlder(name){
        groceriesStore.deleteGrocery(name);
    }

    return <p onClick={() => onClickHanlder(name)}>{name}</p>;
}