import React, { Component } from "react";

class Student extends Component {
  render() {
    return (
      <div>
        <h1>Name : {this.props.name} </h1>
        <h2>email : {this.props.email}</h2>
        <p>
          Address : {this.props.other.address} and Phone :{" "}
          {this.props.other.phone}{" "}
        </p>
      </div>
    );
  }
}

class ReactPropsClass extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "navy", color: "white" }}>
        <h1>Student Components</h1>
        <hr />
        <Student
          name="Sameer"
          email={"Sameer@gmail.com"}
          other={{
            address: "Hogward",
            phone: 1111,
          }}
        />
        <hr />
        <Student
          name="Harry"
          email={"Harry@gmail.com"}
          other={{
            address: "Hogward",
            phone: 2222,
          }}
        />
        <hr />
        <Student
          name="Ron"
          email={"Ron@gmail.com"}
          other={{
            address: "Hogward",
            phone: 3333,
          }}
        />
      </div>
    );
  }
}

export default ReactPropsClass;
