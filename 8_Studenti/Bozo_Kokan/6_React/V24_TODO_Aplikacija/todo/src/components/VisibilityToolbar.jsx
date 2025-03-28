import Button from "react-bootstrap/Button";


export default function VisibilityToolbar() {
    return (
        <>
        <Button size="sm" >All</Button>
        <Button size="sm" variant="warning">Active</Button>
        <Button size="sm" variant="success">Completed</Button>
        </>
    );
}