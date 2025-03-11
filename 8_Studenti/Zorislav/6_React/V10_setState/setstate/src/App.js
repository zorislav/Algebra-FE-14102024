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
  }

  btnClickHandler = () => {
    const newUsers = this.state.users.map((user) => {
      return { ...user, years: user.years + 1 };
    });
    this.setState({ users: newUsers });
  };

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
        <button onClick={this.btnClickHandler}>Promjena godina</button>
      </div>
    );
  }
}
