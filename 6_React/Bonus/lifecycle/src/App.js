import React, {useState, useEffect, useLayoutEffect} from 'react';
import './App.css';


class ClassKomponenta extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      repos: []
    };
  }

  UNSAFE_componentWillMount() {
    console.log('Class Component will mount!');
  }

  componentDidMount() {
    console.log('Class Component did mount!');
    this.getList();
  }

  getList = () => {
    fetch('https://api.github.com/users/facebook/repos')
    .then(response => response.json())
    .then(data => this.setState({repos: data}));
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('Class Component will update!');
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('Class Component did update!');
  }

  render(){

    const { repos } = this.state;

    return(
      <>
        <h3>Class komponenta Lifecycle Methods!</h3>
        {
          repos.map((repo, index) => (
            <div key={repo.id}>
              {index+1} : <strong>{repo.name}</strong>
            </div>
          ))
        }
      </>
    );
  }
}

function FunkcijskaKomponenta() {

  const [repos, setRepos] = useState([]);

  useLayoutEffect(()=>{
    console.log('Function Component will mount!');
  }, []);

  useEffect(()=>{
    console.log('Function Component did mount!');
    getList();
    console.log('List displayed');
  }, [])

  const getList = () => {
    fetch('https://api.github.com/users/facebook/repos')
    .then(response => response.json())
    .then(data => setRepos(data));
  }

  return(
    <>
      <h3>Funkcijska Komponenta Lifecycle Methods!</h3>
      {
        repos.map((repo, index) => (
          <div key={repo.id}>
            {index+1} : <strong>{repo.name}</strong>
          </div>
        ))
      }
    </>
  );

}


function App(){

  return(
    <div className='App'>
      <ClassKomponenta />
      <FunkcijskaKomponenta/>
    </div>
  );
}

export default App;

