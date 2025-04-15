import React from 'react';
import { UserFunction, UserChildren, UserClass } from './user/index';

class App extends React.Component {

  state = {
    users: [
      {name: 'Ivan', years: 30},
      {name: 'Marko', years: 35},
      {name: 'Ana', years: 25}
    ],
    childrenText: "A hobi mi je skijanje"
  };

  render() {

    const { users } = this.state;

    return (
      <>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <UserFunction name={this.state.users[0].name} years={this.state.users[0].years} />
        <UserClass name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>{this.state.childrenText}</UserChildren>
      </>
    );
  }
}

export default App;
