import React from "react";

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
    };
  }

  handleUserChange = (event) => {
    const userName = event.target.value;
    this.setState({ userName });
  };

  handleUserSelected = (event) => {
    event.preventDefault();

    const { userName } = this.state;
    const { setUser } = this.props;

    setUser(userName);

    this.setState({ userName: "" });
  };

  render() {
    const { userName } = this.state;
    return (
      <form onSubmit={this.handleUserSelected}>
        <div style={styles.container}>
          <label htmlFor="name" style={styles.label}>
            Github username:
          </label>
          <br />
          <input
            id="name "
            type="text"
            autoFocus
            style={styles.input}
            value={userName}
            onChange={this.handleUserChange}
          />
          <button style={styles.button}>GO!</button>
        </div>
      </form>
    );
  }
}

export default UserForm;

const styles = {
  container: {
    paddingLeft: 50,
    paddingRight: 50,
  },
  button: {
    marginTop: 20,
    width: "100%",
  },
  input: {
    marginTop: 10,
    width: "100%",
    boxSizing: "border-box",
  },
  label: {
    fontWeight: "bold",
  },
};
