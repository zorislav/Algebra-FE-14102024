import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  handleChange = (event) => {
    const text = event.target.value;
    this.setState({ text });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSendMessage } = this.props;
    const { text } = this.state;
    onSendMessage(text);
    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;

    return (
      <div className="input-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={this.handleChange}
            placeholder="Enter your message"
            autoFocus
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}
