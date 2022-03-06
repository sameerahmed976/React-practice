import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const inputHandler = () => {
    console.log((inputRef.current.value = 1000));
    inputRef.current.focus();
    inputRef.current.style.color = "#000";
  };
  return (
    <div>
      <h1></h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name :</label> <br />
        <br />
        <input type="text" ref={inputRef} />
        <button onClick={inputHandler}>click</button>
      </form>
    </div>
  );
};

export default UseRef;
