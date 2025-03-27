import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";

export default function TodoList({todos}){

  return(
    <ListGroup>
      {
        todos.map(todo => <ListGroupItem>{todo}</ListGroupItem>)
      }
    </ListGroup>
  );
}