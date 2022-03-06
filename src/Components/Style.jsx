import React from "react";
import classes from "../Style.module.css";
const Style = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "blue", color: "white" }}>Hello World</h1>
      <p className={classes.gold}>This is a React</p>
    </div>
  );
};

export default Style;
