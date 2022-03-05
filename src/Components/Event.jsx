import React from "react";

const Event = () => {
  let data = "Sameer";

  const handleClick = () => {
    alert(`I am a clcik event and my name is ${data} `);
  };
  return (
    <>
      <h1>{data}</h1>
      <button onClick={() => handleClick()}>click</button>
    </>
  );
};

export default Event;
