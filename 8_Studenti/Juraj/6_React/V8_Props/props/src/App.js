import './App.css';
import React from "react";
import UserFunction from './user/UserFunction';
import { users } from './data/dummyData';

import {UserFunction, UserClass, UserChildren, NovaKomponenta} from "./user";

export default class App extends React.Component {
render() {
  return (
<div className="App">
<h1>React Aplikacija</h1>
<p>Ovo zaista radi</p>
{ <UserFunction ime={users[0].name} years={users[0].years} /> }
{/* <UserFunction ime={users[0].name} */}
<UserClass name={users[1].name} years={users[1].years}/>
<UserChildren name={users[2].name} years={users[2].years} />
i hobi mi je skijanje
<NovaKomponenta />
<UserChildren/>
</div>
  );
  
}
}

