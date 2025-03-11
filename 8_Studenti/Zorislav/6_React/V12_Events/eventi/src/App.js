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

  nameChangeHandler = (event) => {
    const { users } = this.state;
    const newUsers = [...users];
    newUsers[0].name = event.target.value;
    this.setState({ users: newUsers });
  };

  render() {
    const { users, childrenText } = this.state;

    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction
          ime={users[0].name}
          years={users[0].years}
          onNameChange={this.nameChangeHandler}
        />
        <UserClass name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>
          {childrenText}
        </UserChildren>
        <button onClick={this.btnClickHandler}>Promjena godina</button>
      </div>
    );
  }
}

// import { useState } from "react";
// import "./App.css";
// import Child from "./Child";

// function App() {
//   const messageFromParent = "Budi dobar!";
//   const [counter, setCounter] = useState(0);
//   const [childText, setChildText] = useState("?");

//   function onClickHandler() {
//     setCounter((prevState) => prevState + 1);
//   }

//   function changeChildText(msg) {
//     setChildText(msg);
//   }

//   return (
//     <div className="App">
//       <p>Counter: {counter}</p>
//       <button onClick={onClickHandler}>Increment counter</button>
//       <h1>This is parent</h1>
//       <h3>Message from child: {childText}</h3>
//       <Child parentMsg={messageFromParent} parentFn={changeChildText} />
//     </div>
//   );
// }

// export default App;
