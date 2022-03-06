import React, { Component } from "react";

export default class ShouldComponentUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteColor: "red",
    };
  }

  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    this.setState({ favouriteColor: "blue" });
  };

  render() {
    return (
      <div>
        <h1>My favourite Color is {this.state.favouriteColor}</h1>
        <button type="button" onClick={this.changeColor}>
          change color
        </button>
      </div>
    );
  }
}
