import React, { useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = React.useState(0);
  const [item, setItem] = React.useState(10);

  const multicountusememo = useMemo(
    function multiCount() {
      console.log("render");
      return count * 5;
    },
    [count]
  );

  return (
    <div>
      <h1>Use memo hook</h1>
      <h2>Count : {count}</h2>
      <h2>item : {item}</h2>
      <p>{multicountusememo}</p>
      <button onClick={() => setCount(count + 1)}>count</button>
      <button onClick={() => setItem(item + 1)}>item</button>
    </div>
  );
};

export default UseMemo;
