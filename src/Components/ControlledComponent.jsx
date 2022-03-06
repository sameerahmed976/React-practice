import React, { useState } from "react";

const ControlledComponent = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(name, data);
  };

  return (
    <div>
      <h1>ControlledComponent</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="data"
          onChange={(e) => setData(e.target.value)}
          value={data}
        />
        <button onClick={clickHandler}>click</button>
      </form>
    </div>
  );
};

export default ControlledComponent;
