import React, { Component } from "react";

export default class Constructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteColor: "red",
    };
  }
  render() {
    return <h1>My favourite color is {this.state.favouriteColor}</h1>;
  }
}
