import React, { useRef } from "react";
import ForwardRefChild from "./ForwardRefChild";

const ForwardRef = () => {
  const inputRef = useRef(null);

  const InputHandler = () => {
    // console.log((inputRef.current.value = 1000));
    // console.log(inputRef.current.style.focus);
    inputRef.current.focus();
  };
  return (
    <div>
      <ForwardRefChild ref={inputRef} />
      <h1>Upadte box</h1>
      <button onClick={InputHandler}>input box</button>
    </div>
  );
};

export default ForwardRef;
