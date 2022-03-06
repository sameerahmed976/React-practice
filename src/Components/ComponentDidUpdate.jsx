import React, { Component } from "react";

export default class ComponentDidUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favouriteColor: "red",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        favouriteColor: "green",
      });
    }, 3000);
  }

  componentDidUpdate() {
    document.getElementById("update").innerHTML =
      "The update favourite color is : " + this.state.favouriteColor;
  }

  render() {
    return (
      <div>
        <h1>My favourite color is : {this.state.favouriteColor}</h1>
        <h1 id="update"></h1>
      </div>
    );
  }
}
