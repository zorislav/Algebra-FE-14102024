import React from "react";
import "./App.css";

import { VisibilityToolbar, AddTodoForm, TodoList } from "./components";
import { visibility_types } from "./constants/const";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      visibility: visibility_types.ALL
    };
  }

  componentDidUpdate(){
    const { todos } = this.state;
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  handleAddTodo(value) {
    const { todos } = this.state;
    
    if(value){      
      const newTodo = {
        id: Math.random().toString(16).substr(2,9),
        text: value,
        completed: false
      };
      this.setState( { todos: [...todos, newTodo] } );
    } else{
      alert("Please enter a task!");
    }
  }

  handleToggleTodo(id){

    const { todos } = this.state;
    const newTodos = [...todos]; ///kopija
    const newTodo = newTodos.find(todo => todo.id === id);
    newTodo.completed = !newTodo.completed;
    this.setState({ todos: newTodos });
  }

  handleRemoveTodo(id){
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  handleVisibilityChange(newVisibility){
    this.setState({ visibility: newVisibility })
  }

  getVisibleTodos(){
    const { todos, visibility } = this.state;
    if(visibility===visibility_types.ALL){
      return todos;
    } else if(visibility === visibility_types.COMPLETED){
      return todos.filter((todo)=>todo.completed);
    } else if(visibility===visibility_types.ACTIVE){
      return todos.filter((todo)=>!todo.completed);
    }
  }

  handleRemoveCompleted(){
    const { todos } = this.state;
    const newTodos = todos.filter(todo => !todo.completed);
    this.setState({ todos: newTodos });
  }
  

  render() {
    const { todos, visibility } = this.state;
    const visibleTodos = this.getVisibleTodos();
    const hasCompletedTodos = todos.some(todo => todo.completed);

    return (
      <div className="app">
        <h1 className="header">My tasks</h1>
        <VisibilityToolbar visibilityType={visibility} onVisibilityChange={this.handleVisibilityChange.bind(this)}/>
        <div className="todo-container">
          <AddTodoForm addTodo={this.handleAddTodo.bind(this)}/>
          <TodoList 
          todos={visibleTodos} 
          toggleTodo={this.handleToggleTodo.bind(this)} 
          removeTodo={this.handleRemoveTodo.bind(this)}/>
        </div>
        {
          hasCompletedTodos && (        
            <div className="clear-completed-wrapper"> 
              <span className="clear-completed" onClick={this.handleRemoveCompleted.bind(this)}>Clear Completed</span>
            </div>    
          )
        }
      </div>
    );
  }
}

export default App;