import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getNasaData } from "./store/redux-store";
import Komponenta from "./components/Komponenta";

function App() {
  const dispatch = useDispatch();
  const nasaData = useSelector((state) => state.nasaData);

  useEffect(() => {
    dispatch(getNasaData());
  }, [dispatch]);

  const renderContent = nasaData.title ? (
    <>
      <h1>NASA Picture of the day</h1>
      <h3>{nasaData.title}</h3>
      <img src={nasaData.url} alt={nasaData.title} width={500} />
      <p>{nasaData.explanation}</p>
    </>
  ) : (
    <p>Loading NASA data...</p>
  );

  return (
    <>
      <div className="App">
        {renderContent}
        <Komponenta />
      </div>
      ;
    </>
  );
}

export default App;
