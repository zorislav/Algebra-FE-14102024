import React from "react";
import "./App.css";

import ConditionalRendering from "./components/ConditionalRendering";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: null,
    };
  }

  handleButtonClick(br) {
    this.setState({ number: br });
  }

  render() {

    const { number } = this.state;

    return (
      <div className="App">
        <h1>Hello Conditional Rendering</h1>
        <button onClick={() => this.handleButtonClick(1)}>1</button>
        <button onClick={() => this.handleButtonClick(2)}>2</button>
        <button onClick={() => this.handleButtonClick(3)}>3</button>
        <ConditionalRendering broj={number} />
      </div>
    );
  }
}

export default App;
