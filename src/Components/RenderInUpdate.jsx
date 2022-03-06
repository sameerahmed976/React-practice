import React, { Component } from "react";

export default class RenderInUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favouriteColor: "red",
    };
  }

  changeColor = () => {
    this.setState({
      favouriteColor: "green",
    });
  };
  render() {
    return (
      <div>
        <h1>My Favourite Color is {this.state.favouriteColor}</h1>
        <button type="button" onClick={this.changeColor}>
          change color
        </button>
      </div>
    );
  }
}
