import React from "react";

const Student = (props) => {
  return (
    <React.Fragment>
      <h2>Name : {props.name}</h2>
      <p>email : {props.email}</p>
      <h3>
        Address : {props.other.address} and Phone : {props.other.phone}
      </h3>
      <hr />
    </React.Fragment>
  );
};

const ReactProps = () => {
  return (
    <div style={{ backgroundColor: "green", color: "white" }}>
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
      <Student
        name="Harry"
        email={"Harry@gmail.com"}
        other={{
          address: "Hogward",
          phone: 2222,
        }}
      />
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
};

export default ReactProps;
