import React, { useState } from "react";
// import ReactDOM from "react-dom";
import "./App.css";
import JSX from "./Components/JSX";
import User from "./Components/User";
import UserClass from "./Components/UserClass";
import Event from "./Components/Event";
import State from "./Components/State";
import Counter from "./Components/Counter";
import StateInClass from "./Components/StateInClass";
import ReactProps from "./Components/ReactProps";
import ReactPropsClass from "./Components/ReactPropsClass";
import InputBox from "./Components/InputBox";
import Toggle from "./Components/Toggle";
import Form from "./Components/Form";
import ConditionalRendering from "./Components/ConditionalRendering";
import BasicFormValidation from "./Components/BasicFormValidation";
// // funstional component
// function HelloWorld() {
//   return <h1>Hello World</h1>;
// }

// // class component
// class Hello extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return <h1>Hello</h1>;
//   }
// }

// const User = () => {
//   return (
//     <div>
//       <h1>User</h1>
//     </div>
//   );
// };

function App() {
  return (
    <React.Fragment>
      {/* <HelloWorld /> */}
      {/* <Hello /> */}
      {/* <User /> */}
      {/* <User /> */}
      {/* <UserClass /> */}
      {/* <JSX /> */}
      {/* <Event /> */}
      {/* <State /> */}
      {/* <Counter /> */}
      {/* <StateInClass /> */}
      {/* <ReactProps /> */}
      {/* <ReactPropsClass /> */}
      {/* <InputBox /> */}
      {/* <Toggle /> */}
      {/* <Form /> */}
      {/* <ConditionalRendering /> */}
      <BasicFormValidation />
    </React.Fragment>
  );
}

export default App;
