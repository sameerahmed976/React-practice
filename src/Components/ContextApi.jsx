import React, { useState, useContext, createContext } from "react";

const Child = () => {
  const val = useContext(UserContext);
  return (
    <div>
      <h1>Hello Chlid {val} </h1>
    </div>
  );
};

const UserContext = createContext();

const ContextApi = () => {
  const [user, setUser] = useState("Home");
  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Child user={user} />
    </UserContext.Provider>
  );
};

export default ContextApi;
