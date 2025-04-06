import { useNavigate } from "react-router-dom";

export default function NotFound(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return(
        <>
        <h1>404 Page Not Found!</h1>
        <button onClick={handleClick}> Home </button>
        </>
    )
}