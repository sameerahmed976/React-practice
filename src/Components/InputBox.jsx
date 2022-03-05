import React, { useState } from "react";

const InputBox = () => {
  const [name, setName] = useState("");
  const [print, setPrint] = useState(false);

  const valueHandler = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
    setPrint(false);
  };

  const printHandler = () => {
    setPrint(true);
  };

  return (
    <div>
      <h1>Get Input box Value</h1>
      <label htmlFor="name">Get Data :</label>
      <input type="text" onChange={valueHandler} />
      {print ? <h2>Value : {name}</h2> : null}

      <button onClick={printHandler}>Print Data </button>
    </div>
  );
};

export default InputBox;
