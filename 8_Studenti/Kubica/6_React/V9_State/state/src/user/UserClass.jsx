import React from "react";

export default class UserClass extends React.Component {
  render() {
    const { name="Perica", years } = this.props;

    return (
      <p>
        Pozdrav moje ime je {name} i imam {years} godina.
      </p>
    );
  }
}
