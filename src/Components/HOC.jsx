import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
};

function NHOC(props) {
  return (
    <h3>
      <props.cmp />
    </h3>
  );
}
function NEWHOC(props) {
  return (
    <h3>
      <props.cmp />
    </h3>
  );
}
function NEWHOC1(props) {
  return (
    <h3>
      <props.cmp />
    </h3>
  );
}

//High order component
const HOC = () => {
  return (
    <div>
      <h1>Hoc</h1>
      <NHOC cmp={Counter} />
      <NEWHOC cmp={Counter} />
      <NEWHOC1 cmp={Counter} />
    </div>
  );
};

export default HOC;
