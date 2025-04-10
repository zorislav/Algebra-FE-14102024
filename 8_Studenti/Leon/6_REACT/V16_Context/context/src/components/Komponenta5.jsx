import React from "react";
import { Consumer } from "../context/context";
import Context from "../context/context";

export default class Komponenta5 extends React.Component {
  static contextType = Context;

  render() {
    const { text } = this.context;

    return (
      <>
        <h2>Komponenta5</h2>
        <Consumer>{(ctx) => <p>{ctx.text}</p>}</Consumer>
        <p>{text}</p>
      </>
    );
  }
}
