import React, { useState } from "react";

const StateObject = () => {
  const [user, setUser] = useState([
    {
      name: "sameer",
      age: 25,
    },
  ]);

  return (
    <div>
      <h1>Name :{user.name} </h1>
      <input
        type="text"
        // value={user.name}
        onChange={(e) =>
          setUser({
            ...user,
            name: e.target.value,
          })
        }
      />
      <br />
      <br />
      <h2>Name :{user.age} </h2>
      <input
        type="text"
        // value={user.age}
        onChange={(e) =>
          setUser({
            ...user,
            age: e.target.value,
          })
        }
      />
    </div>
  );
};

export default StateObject;
