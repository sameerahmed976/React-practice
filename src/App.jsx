import React, { useState } from "react";
// import ReactDOM from "react-dom";
import "./App.css";
import JSX from "./Components/JSX";
import User from "./Components/User";
import UserClass from "./Components/UserClass";
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
    <>
      {/* <HelloWorld /> */}
      {/* <Hello /> */}
      {/* <User /> */}
      <User />
      <UserClass />
      <JSX />
    </>
  );
}

export default App;
