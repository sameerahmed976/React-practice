import React, { useState, useEffect } from "react";

const User = ({ data, count }) => {
  useEffect(() => {
    console.log("Data");
  }, [data]);
  useEffect(() => {
    console.log("count");
  }, [count]);

  return (
    <>
      <h1>Hello User</h1>
      <h1>Count : {count}</h1>
      <h1>Data : {data}</h1>
    </>
  );
};

const UseEffect = () => {
  const [count, setCount] = useState(100);
  const [data, setData] = useState(10);

  return (
    <div>
      <h1>Use Effect in React</h1>

      <User data={data} count={count} />
      <button onClick={() => setCount(count + 1)}>update Counter</button>
      <button onClick={() => setData(data + 1)}>update Data</button>
    </div>
  );
};

export default UseEffect;
