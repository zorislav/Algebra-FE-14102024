import './App.css';
import React from 'react';

import {UserFunction, UserChildren, NovaKomponenta, UserClass} from "./user/index.js";

import {users} from "./data/dummyData.js";

export default class App extends React.Component  {
  render(){
    return(
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction ime="Ivica" years={39} />
        <UserFunction ime={users[0].name} years = {users[0].years}/>
        <UserClass name={users[1].name} years = {users[1].years}/>
        <UserChildren name={users[2].name} years = {users[2].years}>
          I hobi mi je skijanje
        <NovaKomponenta />
        </UserChildren>
      </div>
    );
  }
}