import React from "react";
import './App.css';
import {AddTodoForm, TodoList, VisibilityToolbar} from "./components";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      todos: ["Prvi", "Drugi"],
    };
  }

  render(){

    const todos = this.state;

    return (
      <div className="app">
        <h1 className="header">My Tasks</h1>
        <VisibilityToolbar />
        <div className="todoContainer">
        <AddTodoForm />
        <TodoList todos={todos}/>
        </div>
      </div>
    );
  }
}

export default App;
