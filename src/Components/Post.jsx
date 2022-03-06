import React, { useState } from "react";

const Post = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const submitHandle = (e) => {
    e.preventDefault();
    console.log({ name, email, phone });
    let data = {
      name,
      email,
      phone,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />
        <input
          type="text"
          name="name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          name="name"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <br />
        <button type="button" onClick={submitHandle}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default Post;
