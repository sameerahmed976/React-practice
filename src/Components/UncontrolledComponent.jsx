import React, { useRef } from "react";

const UncontrolledComponent = () => {
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);

  const sumbitHandler = (e) => {
    e.preventDefault();
  };

  const clickHandler = () => {
    console.log(inputRef.current.value);
    console.log(inputRef1.current.value);
  };

  return (
    <div>
      <h1>UncontrolledComponent</h1>
      <form onSubmit={sumbitHandler}>
        <input type="text" ref={inputRef} />
        <br /> <br />
        <input type="text" ref={inputRef1} />
        <br /> <br />
        <button onClick={clickHandler}>submit</button>
      </form>
    </div>
  );
};

export default UncontrolledComponent;
