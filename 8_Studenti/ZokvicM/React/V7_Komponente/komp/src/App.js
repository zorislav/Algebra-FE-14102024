import './App.css';
import React from 'react';

import WelcomeClass from './components/WelcomeClass';
import WelcomeFunction from './components/WelcomeFunction';

function App() {
  return (
   // <div className="App">
     // <WelcomeClass />
      //<WelcomeFunction />
    //</div>
     <React.Fragment>
       <WelcomeClass />
       <WelcomeFunction />
     </React.Fragment>
  );
}

export default App;