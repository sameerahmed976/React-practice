import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countHandler = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={countHandler}>increament</button>
    </>
  );
};

export default Counter;
