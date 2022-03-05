import React, { useState } from "react";

const Toggle = () => {
  const [status, setStatus] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setStatus(true);
        }}
      >
        Show
      </button>
      <button
        onClick={() => {
          setStatus(false);
        }}
      >
        Hide
      </button>
      <button
        onClick={() => {
          setStatus(!status);
        }}
      >
        Toggle
      </button>
      {status ? <h1>Hello React</h1> : null}
    </div>
  );
};

export default Toggle;
