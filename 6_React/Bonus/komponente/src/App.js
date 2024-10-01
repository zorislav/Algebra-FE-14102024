import React, { useState } from 'react';
import './App.css';

// Funkcijska komponenta

function FunkcijskaKomponenta({ ime, starost, grad, onAppSt, children }){

  const [fnStanje, setFnStanje] = useState("Fn pocetno stanje");

  function btnClickHandler(){
    setFnStanje("Fn novo stanje");
  }

  return (
    <div style={fnStyle}>
      {fnStanje}
      <h2>{children} komponenta</h2>
      <p>Ime: {ime}</p>
      <p>Starost: {starost}</p>
      <p>Grad: {grad}</p>
      <button onClick={btnClickHandler}>Promjeni lokalno stanje</button>
      <button onClick={() => onAppSt("App novo stanje iz Funkcijske komponente") }>Promjeni App stanje</button>
    </div>
  );
}

// Class komponenta

class ClassKomponenta extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      classStanje: "Class pocetno stanje"
    };
  }

  btnClickHandler(){
    this.setState({classStanje: "Class novo stanje"})
  }

  render (){

    const { starost, grad, onAppSt, children } = this.props;
    
    return (
      <div style={classStyle}>
        {this.state.classStanje}
        <h2>{children} komponenta</h2>
        <p>Ime: {this.props.ime}</p>
        <p>Starost: {starost}</p>
        <p>Grad: {grad}</p>
        <button onClick={this.btnClickHandler.bind(this)}>Promjeni lokalno stanje</button>
        <button onClick={() => onAppSt("App novo stanje iz Class komponente") }>Promjeni App stanje</button>
      </div>
    );
  }
}

function App() {

  const [appStanje, setAppStanje] = useState("App pocetno stanje");

  function appStanjeHandler(novoStanje){
    setAppStanje(novoStanje);
  }

  return (
    <div className="App" style={appStyle}>
      {appStanje}
      <h1>App komponenta</h1>
      <FunkcijskaKomponenta ime="Ivica" starost={25} grad="Osijek" onAppSt={appStanjeHandler}>Funkcijska</FunkcijskaKomponenta>
      <ClassKomponenta ime="Marica" starost={44} grad="Pula" onAppSt={appStanjeHandler}>Class</ClassKomponenta>
    </div>
  );
}

// Glavna komponenta aplikacije

export default App;

// Stilizacija

const appStyle = {
  backgroundColor: 'lightgrey',
  border: '1px solid black',
  padding: 10
};

const fnStyle = {
  backgroundColor: 'lightblue',
  border: '1px solid black'
}

const classStyle = {
  backgroundColor: 'lightgreen',
  border: '1px solid black'
}

