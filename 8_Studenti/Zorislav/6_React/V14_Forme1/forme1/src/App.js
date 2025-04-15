import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;
    console.log(`Ime: ${name}`);
    this.setState({ name: "" });
  };

  render() {
    const { name } = this.state;

    return (
      <div className="App">
        <h1>Obrasci 1</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="ime">
            Ime:
            <input
              id="ime"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <button>Pošalji</button>
        </form>
      </div>
    );
  }
}

export default App;
