import React, { useState } from "react";

const State = () => {
  const [name, setName] = useState("My Name is ");
  const updateDataHandler = () => {
    setName("Sameer");
  };

  return (
    <React.Fragment>
      <h1>State in React</h1>
      <h2>Name : {name}</h2>
      <hr />
      <button onClick={updateDataHandler}>Click here to see my name</button>
    </React.Fragment>
  );
};

export default State;
