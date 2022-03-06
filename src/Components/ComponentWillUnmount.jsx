import React, { Component } from "react";

class Child extends Component {
  componentWillUnmount() {
    alert("The component  Header is about to unmount  ");
  }
  render() {
    return <h1>Hello World</h1>;
  }
}

export default class ComponentWillUnmount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }
  delHeader = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.show ? <Child /> : ""}
        <button onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}
