import { useNavigate } from "react-router-dom";

export default function Komponenta1(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return(
        <>
        <h2>Welcome to Komponenta1!</h2>
        <p>Ovo je primjer koristenja React Routera</p>
        <p>Sad sam na komponenti1.</p>
        <button onClick={handleClick}> Home </button>
        </>
    )
}