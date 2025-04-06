import './App.css';
import React from 'react';

import {UserFunction, UserChildren, UserClass} from "./user/index.js";
import { useState } from 'react';
import {users as dummyUsers} from "./data/dummyData.js";

export default function App(){

  const [users , setUsers] = useState(dummyUsers);

  const [childrenText, setChildrenText] = useState("Hobi mi je skijanje"); // nekoristimo useChildrenText 

  const btnClickHandler = () => {
    const newUsers = users.map((user) => {
      return {...user, years: user.years + 1};
    });
   setUsers(newUsers);
  } 

    return(
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction ime={users[0].name} years = {users[0].years}/>
        <UserClass name={users[1].name} years = {users[1].years}/>
        <UserChildren name={users[2].name} years = {users[2].years}>
          {childrenText}
        </UserChildren>
        <button onClick={btnClickHandler}> Promjena godina </button>
      </div>
    );
  }