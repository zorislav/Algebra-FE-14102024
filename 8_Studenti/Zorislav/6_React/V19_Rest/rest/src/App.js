import { useEffect, useState } from "react";
import "./App.css";

const NASA_API_KEY = `F7NDSvVq6xtFLM8IDjYHPEd7bG0GzdVH501agwwn`;

function App() {
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
    );
    const responseData = await response.json();
    setData(responseData);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderContent = data ? (
    <>
      <h1>NASA Picture of the day</h1>
      <h3>{data.title}</h3>
      <img src={data.url} alt={data.title} width={500} />
      <p>{data.explanation}</p>
    </>
  ) : (
    <p>Loading NASA data...</p>
  );

  return <div className="App">{renderContent}</div>;
}

export default App;
