import React from "react";

//Life Cycle Methods
// constructor
class MountClass extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red",
    };

    //should not call api here
    // componentDidMount api should be called
  }

  render() {
    return (
      <h2>
        I am a {this.state.color} car! and brand is {this.props.brand}
      </h2>
    );
  }
}

export default MountClass;
