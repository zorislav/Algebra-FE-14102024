import './App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNasaData } from './store/redux-store';

function App() {

  // const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const nasaData = useSelector((state) => state.nasaData);

  // const getData = async () => {
  //   const response  = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
  //   const responseData = await response.json();
  //   setData(responseData);
  // }


  useEffect(()=>{
    // getData();
    dispatch(getNasaData());
  }, [dispatch]);
  
  const renderContent = nasaData.title ? (
    <>      
      <h1>NASA Picture of the day</h1>
      <h3>{nasaData.title}</h3>
      <img src={nasaData.url} alt={nasaData.title} width={500}></img>
      <p>{nasaData.explanation}</p>      
    </>
  ) 
  : (
    <>
        <p>Loading NASA Data..</p>
    </>
  );
  

  return (
    <div className="App">
      {renderContent}
    </div>
  );
}

export default App;
