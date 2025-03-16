import React, { Component } from 'react';

class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      years: ''
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleYearsChange = (event) => {
    this.setState({ years: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, years } = this.state;
    if (name && years) {
      this.props.onAddUser({ name, years });
      this.setState({ name: '', years: '' }); // Reset fields
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Ime" 
          value={this.state.name} 
          onChange={this.handleNameChange} 
        />
        <input 
          type="number" 
          placeholder="Godine" 
          value={this.state.years} 
          onChange={this.handleYearsChange} 
        />
        <button type="submit">Dodaj korisnika</button>
      </form>
    );
  }
}
export default AddUserForm;