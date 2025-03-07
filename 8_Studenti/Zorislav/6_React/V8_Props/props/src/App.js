import React from "react";
import "./App.css";

import { users } from "./data/dummyData";
import { UserFunction, UserClass, UserChildren, NovaKomponenta } from "./user";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        {/* <UserFunction user={users[0]} /> */}
        <UserFunction ime={users[0].name} years={users[0].years} />
        <UserClass name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>
          I hobi mi je skijanje
          <NovaKomponenta />
        </UserChildren>
        {/*  users.map(user => <ListItem name={user.name} years={user.years} />)  */}
      </div>
    );
  }
}
