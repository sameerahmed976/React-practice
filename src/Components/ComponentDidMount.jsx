import React, { Component } from "react";

export default class ComponentDidMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteColor: "red",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favouriteColor: "green" });
    }, 3000);
  }

  render() {
    return (
      <div>
        <h1>My favourite Color is {this.state.favouriteColor}</h1>
      </div>
    );
  }
}
