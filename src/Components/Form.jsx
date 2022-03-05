import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, tnc, interest);
    setName("");
    setInterest("");
    setTnc(false);
  };
  return (
    <div>
      <h1>Handle Form in React</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setInterest(e.target.value)} value={interest}>
          <option>Select Option</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>
        <br /> <br />
        <input
          type="checkbox"
          onChange={(e) => setTnc(e.target.checked)}
          value={tnc}
        />
        <span>Acept Terms and Conditions</span>
        <br />
        <br />
        <button type="submit">submit</button>
        <button type="reset">reset</button>
      </form>
    </div>
  );
};

export default Form;
