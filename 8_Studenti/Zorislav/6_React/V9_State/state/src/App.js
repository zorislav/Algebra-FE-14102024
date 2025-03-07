import React from "react";
import "./App.css";

import { users } from "./data/dummyData";
import { UserFunction, UserClass, UserChildren } from "./user";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: users,
      childrenText: "i hobi mi je skijanje",
    };

    // this.state = {
    //   users: [
    //     {
    //       name: "Ivan",
    //       years: 30,
    //     },
    //     {
    //       name: "Marko",
    //       years: 25,
    //     },
    //     {
    //       name: "Ana",
    //       years: 25,
    //     },
    //   ],
    //   childrenText: "i hobi mi je skijanje",
    // };
  }

  // state = {
  //   users: [],
  //   childrenText: "i hobi mi je skijanje"
  // };

  render() {
    const { users, childrenText } = this.state;

    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction ime={users[0].name} years={users[0].years} />
        <UserClass name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>
          {childrenText}
        </UserChildren>
      </div>
    );
  }
}
