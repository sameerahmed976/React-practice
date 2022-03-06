import React, { PureComponent, Component } from "react";

class User extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("child rerender");
    return (
      <div>
        <h1>User : {this.props.count}</h1>
      </div>
    );
  }
}

export default class Purecomponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }
  render() {
    console.log("rendering");
    return (
      <div>
        <User count={this.state.count} />
        <h1>Count : {this.state.count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          update count
        </button>
      </div>
    );
  }
}
