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

  btnClickHandler = () => {
    const newUsers = this.state.users.map((user) => {
      return {...user, years: user.years+1};
    });
    this.setState({users: newUsers});
  }

  nameChangeHandler = (event) => {
    
    const { users } = this.state;
    const newUsers = [...users];
    newUsers[0].name = event.target.value;
    this.setState({users: newUsers});
    
    return;
  }

  render() {

    const { users, childrenText } = this.state;

    return (
      <>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <UserFunction name={this.state.users[0].name} years={this.state.users[0].years} onNameChange={this.nameChangeHandler}/>
        <UserClass name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>{childrenText}</UserChildren>
        <button onClick={this.btnClickHandler}>Promjena godina</button>
      </>
    );
  }
}

export default App;
