import React from 'react';
import './App.css';

class App extends React.Component {

constructor(props){
super(props);

this.state = {
  name: ""
}
}

handleChange = (event) => {
  this.setState({name:event.target.value})
};

handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state.name);
  this.setState({name: ""});
  
}


render() {

const { name } = this.state;

  return (
    <div className="App">
      <h1>
        Obrasci 1
      </h1>
    <form onSubmit={this.handleSubmit}>
      <label> Ime:
      <input id='ime' type='text' name='name' value={name} onChange={this.handleChange}></input>
      </label>
      
    </form>
    <button>Pošalji</button>
    </div>
    );
  }
}

export default App;
