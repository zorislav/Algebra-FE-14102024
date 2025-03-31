import './App.css';
import React, { Children } from 'react';

import {UserFunction, UserChildren, UserClass} from "./user/index.js";

import {users} from "./data/dummyData.js";

export default class App extends React.Component  {

  constructor(){
    super();

      this.state = {
      users: users,
      childrenText: "Hobi mi je skijanje"
    };
  }

  // state = {
  //   users: [
  // {
  //   name: "Ivan",
  //   years: 30
  // },
  // {
  //   name: "Marko",
  //   years: 25
  // },
  // {
  //   name: "Ana",
  //   years: 25
  // }
  // ],
  //   childrenText: "Hobi mi je skijanje"
  // };

  render(){

    const {users, childrenText} = this.state;
    

    return(
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction ime={users[0].name} years = {users[0].years}/>
        <UserClass name={users[1].name} years = {users[1].years}/>
        <UserChildren name={users[2].name} years = {users[2].years}>
          {childrenText}
        </UserChildren>
      </div>
    );
  }
}