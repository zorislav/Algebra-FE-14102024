import React from "react";
import "./App.css";

import { VisibilityToolbar, AddTodoForm, TodoList } from "./components";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["prvi", "drugi"],
    };
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="app">
        <h1 className="header">My tasks</h1>
        <VisibilityToolbar />
        <div className="todo-container">
          <AddTodoForm />
          <TodoList todos={todos} />
        </div>
      </div>
    );
  }
}

export default App;
