import React from "react";

export default class NewUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0,
    };
  }

  nameChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  ageChangeHandler = (event) => {
    this.setState({ age: +event.target.value });
  };

  userSubmitHandler = (event) => {
    event.preventDefault();

    const { onAddUser } = this.props;
    const { name, age } = this.state;

    if (name && age) {
      onAddUser({name, age });
      this.setState({name: "", age: 0});
    } else {
      alert("Please enter name and age");
    }
  };

  render() {
    const { name, age } = this.state;

    return (
      <form onSubmit={this.userSubmitHandler}>
        <label htmlFor="ime">Ime: </label>
        <input
          id="ime"
          type="text"
          value={name}
          onChange={this.nameChangeHandler}
        />
        <label htmlFor="godine"> Godine: </label>
        <input
          id="godine"
          type="number"
          value={age}
          onChange={this.ageChangeHandler}
        />
        <button>Submit</button>
      </form>
    );
  }
}
