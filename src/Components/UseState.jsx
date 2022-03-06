import React, { useState } from "react";

const UseState = () => {
  const [data, setData] = useState();
  return (
    <div>
      <h1>Hello {data}</h1>
      <button
        onClick={() => {
          setData("Sameer");
        }}
      >
        click to see my name
      </button>
    </div>
  );
};

export default UseState;
