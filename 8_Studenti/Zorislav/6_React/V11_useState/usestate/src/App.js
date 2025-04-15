import React from "react";
import "./App.css";
import { useState } from "react";
import { users as dummyUsers } from "./data/dummyData";
import { UserFunction, UserClass, UserChildren } from "./user";

export default function App() {
  const [users, setUsers] = useState(dummyUsers);
  const childrenText = "i hobi mi je skijanje";

  const btnClickHandler = () => {
    const newUsers = users.map((user) => {
      return { ...user, years: user.years + 1 };
    });
    setUsers(newUsers);
  };

  return (
    <div className="App">
      <h1>React aplikacija</h1>
      <p>Ovo zaista radi</p>
      <UserFunction ime={users[0].name} years={users[0].years} />
      <UserClass name={users[1].name} years={users[1].years} />
      <UserChildren name={users[2].name} years={users[2].years}>
        {childrenText}
      </UserChildren>
      <button onClick={btnClickHandler}>Promjena godina</button>
    </div>
  );
}
