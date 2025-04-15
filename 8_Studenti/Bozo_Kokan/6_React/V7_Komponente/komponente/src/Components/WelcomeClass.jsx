/* eslint-disable no-useless-constructor */
import React from "react";

export default class WelcomeClass extends React.Component {

    constructor(){
        // inicijalizacija 
        super();
    }

    render (){
        // Izvrsava se kod svkog rendera
        return  <h2>Welcome! Komponenta definirana klasom</h2>;
    }
}