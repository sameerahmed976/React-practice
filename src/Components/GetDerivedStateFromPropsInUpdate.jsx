import React, { Component } from "react";

export default class GetDerivedStateFromPropsInUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = { favouriteColor: "red" };
  }

  static getDerivedStateFromProps(props, state) {
    return { favouriteColor: props.favcol };
  }

  changeColor = () => {
    this.setState({
      favouriteColor: "green",
    });
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
