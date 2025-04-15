import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

// class App extends React.Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       repos: []
//     }
//   }

//   UNSAFE_componentWillMount(){
//     alert("Component will mount");
//   }
  
//   componentDidMount(){
//     alert("Component did mount");
//     this.getList();
//   }

//   UNSAFE_componentWillUpdate(){
//     alert("Component will update!");
//   }

//   componentDidUpdate(){
//     alert("Component did update!");
//   }

//   shouldComponentUpdate(){
//     return false;
//   }
  
//   getList = () => {
//     fetch("https://api.github.com/users/facebook/repos").then(response=>response.json())
//     .then(responseData=>this.setState({repos: responseData}));
//   }
  
//   render() {
//     const { repos } = this.state;
//     return (
//       <div className="App">
//         <h3>Hello Mounting Lifecycle Methods</h3>
//         <ul>
//         {repos.map((repo, index) => (
//           <li key={repo.id}>
//             {index} : {repo.name}
//           </li>
//         ))}
//         </ul>
//       </div>
//     );
//   }
// }

export default App;

function App() {
  const [repos, setRepos] = useState([]);

    const getList = () => {
    fetch("https://api.github.com/users/facebook/repos").then(response=>response.json())
    .then(responseData=>setRepos({repos: responseData}));
  };

  useEffect(()=>{
    alert("Refreshing");
  })

  useEffect(() => {
    getList();
  },[])

  return (
    <div className="App">
          <h3>Hello Mounting Lifecycle Methods</h3>
          <ul>
          {repos.map((repo, index) => (
          <li key={repo.id}>
            {index} : {repo.name}
          </li>
        ))}
        </ul>
    </div>
  );
}