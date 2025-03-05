import WelcomeClass from "./Components/WelcomeClass";
import WelcomeFunction from "./Components/WelcomeFunction.jsx";
import React from "react";

import "./App.css";

function App() {
  return (
    // <div className="App">
    //   <WelcomeClass />
    //   <WelcomeFunction />
    // </div>
    <React.Fragment>
      <WelcomeClass />
      <WelcomeFunction />
    </React.Fragment>
  );
}

export default App;
