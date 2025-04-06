/* eslint-disable no-unused-vars */
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

  btnClickHandler = () => {
    const newUsers = this.state.users.map((user) => {
      return {...user, years: user.years + 1};
    });
    this.setState({ users: newUsers });
  };

  nameChangeHandler = (event, index) => {
    const { users } = this.state;
    const newUsers = [...users];
    newUsers[index].name = event.target.value;
    this.setState({users: newUsers});
  }

  render(){
    const {users, childrenText} = this.state;    

    return(
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <hr />
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <UserFunction ime={user.name} years={user.years} onNameChange={(event) => this.nameChangeHandler(event, index)}/>
            </li>
          ) )}
        </ul>
        <hr />
        <UserFunction ime={users[0].name} years = {users[0].years} onNameChange={this.nameChangeHandler}/>
        <UserClass name={users[1].name} years = {users[1].years}/>
        <UserChildren name={users[2].name} years = {users[2].years}>
          {childrenText}
        </UserChildren>
        <button onClick={this.btnClickHandler}> Promjena godina </button>
      </div>
    );
  }
}