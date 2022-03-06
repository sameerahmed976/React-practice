import React from "react";
const User = (props) => {
  return (
    <>
      <h1>User Component</h1>
      <button onClick={props.getData}>Call the function</button>
    </>
  );
};

const PropsFunction = () => {
  const getData = () => {
    alert("Hello from PropsFunction");
  };
  return (
    <div>
      <h1>Props as a Function</h1>
      <User getData={getData} />
    </div>
  );
};

export default PropsFunction;
