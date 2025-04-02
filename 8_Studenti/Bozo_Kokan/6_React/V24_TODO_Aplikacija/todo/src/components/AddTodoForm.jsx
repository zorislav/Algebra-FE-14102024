import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
    };
  }

  handleChange(event) {
    const newItem = event.target.value;
    console.log(newItem);
    this.setState({ newItem: newItem });
  }

  handleAddTodoClick(event) {
    event.preventDefault();

    const { addTodo } = this.props;
    const { newItem } = this.state;

    addTodo(newItem);

    this.setState({ newItem: "" });
  }

  render() {
    const { newItem } = this.state;

    return (
      <InputGroup>
        <FormControl
          value={newItem}
          onChange={this.handleChange.bind(this)}
          placeholder="Add Todo"
        ></FormControl>
        <Button
          type="submit"
          variant="primary"
          onClick={this.handleAddTodoClick.bind(this)}
        >
          Add
        </Button>
      </InputGroup>
    );
  }
}

export default AddTodoForm;
