import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import FormCheck from "react-bootstrap/FormCheck";

class TodoItem extends React.Component {
  handleToggleTodoClick() {
    const { toggleTodo, todo } = this.props;
    toggleTodo(todo.id);
  }

  handleRemoveTodoClick() {
    const { removeTodo, todo } = this.props;
    const confirmRemove = window.confirm(`Delete todo: ${todo.id} ?`);
    if (confirmRemove) {
      removeTodo(todo.id);
    }
  }

  render() {
    const { todo } = this.props;
    const textClass = todo.completed
      ? "todo-item-text todo-item-completed"
      : "todo-item-text";

    return (
      <ListGroupItem className="todo-item">
        <span
          className="todo-item-item"
          onClick={this.handleToggleTodoClick.bind(this)}
        >
          <FormCheck readOnly checked={todo.completed} />
          <span className={textClass}>{todo.text}</span>
        </span>
        <span
          className="todo-item-delete"
          onClick={this.handleRemoveTodoClick.bind(this)}
        >
          X
        </span>
      </ListGroupItem>
    );
  }
}

export default TodoItem;
