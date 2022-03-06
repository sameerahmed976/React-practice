import React, { Component, createRef } from "react";

export default class ClassRef extends Component {
  constructor(props) {
    super(props);

    this.inputRef = createRef();
  }
  componentDidMount() {
    console.log(this.inputRef.current.value);
  }
  getFocus() {
    console.log(this.inputRef.current.value);
    this.inputRef.current.style.color = "red";
  }
  render() {
    return (
      <div>
        <h1>Ref in class</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.getFocus()}>check ref</button>
      </div>
    );
  }
}
