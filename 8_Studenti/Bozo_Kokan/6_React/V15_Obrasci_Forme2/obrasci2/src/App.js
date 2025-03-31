import './App.css';
import React from 'react';
import { UserFunction, AddUserForm } from "./user/index.js";
import { users as initialUsers } from "./data/dummyData.js";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: initialUsers,
      childrenText: "Hobi mi je skijanje"
    };
  }

  btnClickHandler = () => {
    const newUsers = this.state.users.map((user) => {
      return { ...user, years: user.years + 1 };
    });
    this.setState({ users: newUsers });
  };

  nameChangeHandler = (event, index) => {
    const { users } = this.state;
    const newUsers = [...users];
    newUsers[index].name = event.target.value;
    this.setState({ users: newUsers });
  };

  handleAddUser = (newUser) => {
    this.setState(prevState => ({
      users: [...prevState.users, newUser]
    }));
  };

  render() {
    const { users, childrenText } = this.state;

    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <hr />
        <AddUserForm onAddUser={this.handleAddUser} />
        <hr />
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <UserFunction
                ime={user.name}
                years={user.years}
                onNameChange={(event) => this.nameChangeHandler(event, index)}
              />
            </li>
          ))}
        </ul>
        <hr />
        <button onClick={this.btnClickHandler}>Promjena godina</button>
      </div>
    );
  }
}
