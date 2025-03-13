import React from "react";
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      repos: []
    }
  }


UNSAFE_componentWillMount(){
  alert("Component will mount");
}
componentDidMount(){
alert("Component did mount");
}

UNSAFE_componentWillUpdate() {
  alert("Component will update!");
}

componentDidUpdate() {
  alert("Component did update!");
}


shouldComponentUpdate() {
  return false;
}

getList = () => {
  fetch("https://api.github.com/users/facebook/repos")
  .then(response => response.json())
  .then((responseData) => console.log({repos: responseData}));
}

  render() {
    const { repos } = this.state;
    return (
      <div className="App">
       <h3>Hello Mounting Lifecycle Methods!</h3>
       {repos.map((repo,index) => (
        
        <div>
          {index} : {repo.name}
        </div>
       ))}
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//      <h3>Hello Mounting Lifecycle Methods!</h3>
//     </div>
//   );
// }


