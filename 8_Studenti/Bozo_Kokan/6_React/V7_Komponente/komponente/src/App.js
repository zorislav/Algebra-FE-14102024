import './App.css';
import React from 'react';

import WelcomeClass from './Components/WelcomeClass';
import WelcomeFunction from './Components/WelcomeFunction';

function App() {
  return (
    <div className="App">
      <WelcomeClass />
      <WelcomeFunction />
    </div>
    // <React.Fragment>
    //   <WelcomeClass />
    //   <WelcomeFunction />
    // </React.Fragment>
  );
}

export default App;
