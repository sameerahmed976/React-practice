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
import PropsFunction from "./Components/PropsFunction";
import MountClass from "./Components/MountClass";
import Render from "./Components/Render";
import Constructor from "./Components/Constructor";
import GetDerivedStateFromProps from "./Components/getDerivedStateFromProps";
import ComponentDidMount from "./Components/ComponentDidMount";
import GetDerivedStateFromPropsInUpdate from "./Components/GetDerivedStateFromPropsInUpdate";
import ShouldComponentUpdate from "./Components/ShouldComponentUpdate";
import RenderInUpdate from "./Components/RenderInUpdate";
import GetSnapShotBeforeUpdate from "./Components/GetSnapShotBeforeUpdate";
import ComponentDidUpdate from "./Components/ComponentDidUpdate";
import ComponentWillUnmount from "./Components/ComponentWillUnmount";
import UseState from "./Components/UseState";
import UseEffect from "./Components/UseEffect";
import Style from "./Components/Style";
import BootStarp from "./Components/BootStarp";
import ReactList from "./Components/ReactList";
import BootstrapList from "./Components/BootstrapList";
import "bootstrap/dist/css/bootstrap.min.css";
import { NestedList } from "./Components/NestedList";
import LiFtingStateUp from "./Components/LiFtingStateUp";
import Purecomponent from "./Components/Purecomponent";
import UseMemo from "./Components/UseMemo";
import ClassRef from "./Components/ClassRef";
import UseRef from "./Components/UseRef";
import ForwardRef from "./Components/ForwardRef";
import ControlledComponent from "./Components/ControlledComponent";
import UncontrolledComponent from "./Components/UncontrolledComponent";
import HOC from "./Components/HOC";
import Api from "./Components/Api";
import Post from "./Components/Post";
import PrevProps from "./Components/PrevProps";
import StateObject from "./StateObject";
import ContextApi from "./Components/ContextApi";
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
      {/* <BasicFormValidation /> */}
      {/* <PropsFunction /> */}
      {/* <MountClass brand="BMWZ" /> */}
      {/* <Render /> */}
      {/* <Constructor />
       */}
      {/* <GetDerivedStateFromProps favouriteColorFromProps="blue" /> */}
      {/* <ComponentDidMount /> */}
      {/* <GetDerivedStateFromPropsInUpdate favcol="navy" /> */}
      {/* <ShouldComponentUpdate /> */}
      {/* <RenderInUpdate /> */}
      {/* <GetSnapShotBeforeUpdate /> */}
      {/* <ComponentDidUpdate /> */}
      {/* <ComponentWillUnmount /> */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <Style /> */}
      {/* <BootStarp /> */}
      {/* <ReactList /> */}
      {/* <BootstrapList /> */}
      {/* <NestedList /> */}
      {/* <LiFtingStateUp /> */}
      {/* <Purecomponent /> */}
      {/* <UseMemo /> */}
      {/* <ClassRef /> */}
      {/* <UseRef />
       */}
      {/* <ForwardRef /> */}
      {/* <ControlledComponent /> */}
      {/* <UncontrolledComponent /> */}
      {/* <HOC /> */}
      {/* <Api />
      
      */}
      {/* <Post /> */}
      {/* <PrevProps /> */}
      {/* <StateObject /> */}
      {/* <ContextApi /> */}
    </React.Fragment>
  );
}

export default App;
