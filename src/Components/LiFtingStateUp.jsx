import React from "react";

const Child = ({ name, parentAlert }) => {
  const data = "Harry";
  return (
    <>
      <h1>user Component</h1>
      <h1>Name : {name}</h1>
      <button onClick={() => parentAlert(data)}>click me</button>
    </>
  );
};

const LiFtingStateUp = () => {
  let name = "sameer";
  const parentAlert = (data) => {
    alert("Parent Alert : " + data);
  };

  return (
    <div>
      <Child name={name} parentAlert={parentAlert} />
    </div>
  );
};

export default LiFtingStateUp;
