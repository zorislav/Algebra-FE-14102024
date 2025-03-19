import { useNavigate } from "react-router-dom";

export default function Komponenta1() {

function handleClick = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate ("/");

    };
}

    return (
        <>
        <h1>Welcome to Komponenta1!</h1>
        <p>Ovo je primjer korištenja Routera</p>
        <p>Sad sam na komponenti1 </p> 
        <button onClick={handleClick}>Home</button>
        </>


    )
}