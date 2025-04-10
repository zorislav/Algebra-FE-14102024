import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <h2>404 Page Not Found!</h2>
      <button onClick={handleClick}>Home</button>
    </>
  );
}
