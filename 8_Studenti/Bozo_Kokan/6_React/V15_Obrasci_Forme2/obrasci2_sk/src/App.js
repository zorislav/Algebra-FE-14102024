/* eslint-disable no-unused-vars */
import './App.css';
import React, { Children } from 'react';

import {User, NewUser} from "./user/index.js";

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
  };

  addUserHandler = (name, age) => {
    console.log(name + " " + age);
    const { users } = this.state;
    const newUser = { name: name, years: age };
    const newUsers = [...users, newUser]; // Properly append newUser to users array
    this.setState({ users: newUsers });
};

deleteUserHandler = (index) => {
  const [ users ]  = this.state;
  const confirmDelete = window.confirm("Confirm delete user");

  if (confirmDelete) {
      const newUsers = users.filter((user, idx) => idx !== index);
      this.setState({ users: newUsers });
  }
};

  render(){
    const {users, childrenText} = this.state;    

    return(
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <NewUser onAddUser={this.addUserHandler}/>
        <hr />
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <User
              ime={user.name} 
              years={user.years} 
              onNameChange={(event) => this.nameChangeHandler(event, index)}
              onDeleteUser ={() => this.deleteUserHandler(index)}/>
            </li>
          ) )}
        </ul>
        <hr />
      </div>
    );
  }
}