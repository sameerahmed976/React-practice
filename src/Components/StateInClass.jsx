import React from "react";

class StateInClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "my name is",
    };
  }

  clickHandler() {
    this.setState({
      name: "Sameer",
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.clickHandler()}>
          Clcik here to see my name
        </button>
      </>
    );
  }
}
export default StateInClass;
