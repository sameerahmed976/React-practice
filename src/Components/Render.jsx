import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("render method");
    return (
      <div>
        <h1>user Component</h1>
        <h1>Name : {this.props.name}</h1>
      </div>
    );
  }
}

export default class Render extends Component {
  // Render method  rerender
  constructor(props) {
    super(props);
    this.state = {
      name: "sameer",
    };
  }

  render() {
    return (
      <>
        <h1>Render Method in React</h1>
        <User name={this.state.name} />
      </>
    );
  }
}
