import React from "react";
import "./App.css";

import { VisibilityToolbar, AddTodoForm, TodoList } from "./components";
import { VISIBILITY_TYPES } from "./constants/const";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      visibility: VISIBILITY_TYPES.ALL,
    };
  }

  componentDidUpdate() {
    const { todos } = this.state;
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  handleAddTodo(value) {
    const { todos } = this.state;

    const newTodo = {
      id: Math.random().toString(16).substr(2, 9),
      text: value,
      completed: false,
    };

    this.setState({ todos: [...todos, newTodo] });
  }

  handleToggleTodo(id) {
    const { todos } = this.state;
    const newTodos = [...todos];
    const newTodo = newTodos.find((todo) => todo.id === id);
    newTodo.completed = !newTodo.completed;
    this.setState({ todos: newTodos });
  }

  handleRemoveTodo(id) {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  handleRemoveCompeted() {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => !todo.completed);
    this.setState({ todos: newTodos });
  }

  handleVisibilityChange(newVisibility) {
    this.setState({ visibility: newVisibility });
  }

  getVisibleTodos() {
    const { todos, visibility } = this.state;

    if (visibility === VISIBILITY_TYPES.ALL) {
      return todos;
    } else if (visibility === VISIBILITY_TYPES.COMPLETED) {
      const filteredTodos = todos.filter((todo) => todo.completed);
      return filteredTodos;
    }
    const filteredTodos = todos.filter((todo) => !todo.completed);
    return filteredTodos;
  }

  render() {
    const { todos, visibility } = this.state;
    const visibleTodos = this.getVisibleTodos();
    const showClearCompleted = VISIBILITY_TYPES.ALL || VISIBILITY_TYPES.COMPLETED;
    const hasCompleted =  todos.filter(todo => !!todo.completed).length > 0;

    return (
      <div className="app">
        <h1 className="header">My tasks</h1>
        <VisibilityToolbar
          visibilityType={visibility}
          onVisibilityChange={this.handleVisibilityChange.bind(this)}
        />
        <div className="todo-container">
          <AddTodoForm addTodo={this.handleAddTodo.bind(this)} />
          <TodoList
            todos={visibleTodos}
            toggleTodo={this.handleToggleTodo.bind(this)}
            removeTodo={this.handleRemoveTodo.bind(this)}
          />
        </div>
        { visibleTodos && showClearCompleted && hasCompleted && (
          <span
            className="btn-clear-all"
            onClick={this.handleRemoveCompeted.bind(this)}
          >
            Clear completed
          </span>
        )}
      </div>
    );
  }
}

export default App;
