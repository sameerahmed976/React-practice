import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(false);
  const [passError, setPassError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.length < 3 || password.length < 3) {
      alert("Invalid characters");
    } else {
      alert(`All is good  and name : ${name} and password : ${password}`);
    }
  };

  const userHandler = (e) => {
    const item = e.target.value;

    if (item.length < 3) {
      setUserError(true);
    } else {
      setUserError(false);
    }
    setName(item);

    console.warn(e.target.value.length);
  };
  const passwordHandler = (e) => {
    const pass = e.target.value;

    if (pass.length < 3) {
      setPassError(true);
    } else {
      setPassError(false);
    }
    setPassword(pass);

    console.warn(e.target.value.length);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter user name"
          // value={name}
          onChange={userHandler}
        />
        {userError ? <span>User not valid</span> : ""}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter the password"
          // value={password}
          onChange={passwordHandler}
        />
        {passError ? <span>Password not valid</span> : ""}
        <br /> <br />
        <button type="submit">Signup</button>
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
