import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default class UserForm extends React.Component {
  state = { userName: '' };

  handleUserChange = event => {
    const userName = event.target.value;
    this.setState({ userName });
  };

  handleUserSelected = event => {
    event.preventDefault();

    const { userName } = this.state;
    const { setUser } = this.props;

    setUser(userName);
  };

  render() {
    const { userName } = this.state;

    return (
      <Form onSubmit={this.handleUserSelected}>
        <Form.Label>GitHub username:</Form.Label>
        <FormControl
          size="lg"
          placeholder="e.g. facebook"
          onChange={this.handleUserChange}
          value={userName}
          autoFocus
        />
        <Button
          variant="secondary"
          onClick={this.handleUserSelected}
          type="submit"
          size="lg"
          block
          className="mt-5"
        >
          GO!
        </Button>
      </Form>
    );
  }
}

UserForm.propTypes = {
  setUser: PropTypes.func,
};
