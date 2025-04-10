import React from "react";
import "./App.css";

import { users } from "./data/dummyData";
import { User, NewUser } from "./user";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: users,
      childrenText: "i hobi mi je skijanje",
    };
  }

  nameChangeHandler = (event, index) => {
    const { users } = this.state;
    const newUsers = [...users];
    newUsers[index].name = event.target.value;
    this.setState({ users: newUsers });
  };

  addUserHandler = ({ name, age }) => {
    const { users } = this.state;
    const newUser = {
      id: `${name}_${new Date().getTime()}`,
      name: name,
      years: age,
    };
    const newUsers = [...users, newUser];
    this.setState({ users: newUsers });
  };

  deleteUserHandler = (index) => {
    const { users } = this.state;

    const confirmDelete = window.confirm(
      `Confirm delete user ${users[index].name}`
    );
    if (confirmDelete) {
      const newUsers = [...users];
      newUsers.splice(index, 1);
      this.setState({ users: newUsers });
    }
  };

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <NewUser onAddUser={this.addUserHandler} />
        <hr />
        <ul>
          {users.map((user, index) => (
            <li key={user.id}>
              <User
                ime={user.name}
                years={user.years}
                onNameChange={(event) => this.nameChangeHandler(event, index)}
                onDeleteUser={() => this.deleteUserHandler(index)}
              />
            </li>
          ))}
        </ul>
        <hr />
      </div>
    );
  }
}
