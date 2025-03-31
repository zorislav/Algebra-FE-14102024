import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

const GET_DATA = "GET_DATA";

const initialState = {
    nasaData: {
        title: "", 
        url: "",
        explanation: ""
    }
};

const reducer = (state = initialState, action) => {
    switch(isAction.type){
        case GET_DATA:
            ///
            return {nasaData: action.payload };
        default:
            return state;
    }
};

export function getNasaData(){}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;