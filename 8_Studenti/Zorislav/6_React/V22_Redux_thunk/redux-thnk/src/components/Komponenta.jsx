import { useSelector } from "react-redux";

export default function Komponenta(){
  const title = useSelector((state) => state.nasaData.title);

  return (
  <>
    <h3>Komponenta</h3>
    <p>{title}</p>
  </>
  );
}