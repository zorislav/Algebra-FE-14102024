import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from "react-bootstrap/esm/Button";

class AddTodoForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            newItem: ""
        };
    }

    handleChange(event){
        const newItem = event.target.value;
        console.log(newItem);
        this.setState({ newItem: newItem });
    }

    handleAddTodoClick(event){
        event.preventDefault();

    }

    render(){
        const { newItem } = this.state;

        return(
            <InputGroup>
            <FormControl value={ newItem } onChange={this.handleChange.bind(this)} placeholder="Add Task"></FormControl>
            <Button type="submit" variant="secondary" onClick={this.handleAddTodoClick.bind(this)}>Add</Button>
            </InputGroup>
        );
    }
}

export default AddTodoForm;