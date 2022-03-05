import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const userHandler = (e) => {
    if (e.target.value.length < 3) {
      console.log("invalid");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter user name"
          value={name}
          onChange={userHandler}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter the password"
          value={password}
        />
        <br /> <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

const BasicFormValidation = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default BasicFormValidation;
