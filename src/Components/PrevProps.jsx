import React, { useState, useEffect, useRef } from "react";

const Child = (props) => {
  const lastProp = useRef();

  useEffect(() => {
    lastProp.current = props.count;
  });

  const previousProps = lastProp.current;

  return (
    <>
      <h1> Current Value Chid component : {props.count} </h1>
      <h2>Previous value {previousProps} </h2>
    </>
  );
};

const PrevProps = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Previous props</h1>
      <Child count={count} />
      <button onClick={() => setCount(Math.floor(Math.random() * 56))}>
        update counter
      </button>
    </div>
  );
};

export default PrevProps;
