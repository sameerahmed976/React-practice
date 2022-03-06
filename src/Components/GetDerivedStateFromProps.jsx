import React, { Component } from "react";

export default class GetDerivedStateFromProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteColor: "red",
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      favouriteColor: props.favouriteColorFromProps,
    };
  }

  render() {
    return <h1>My favourite Color is {this.state.favouriteColor}</h1>;
  }
}
