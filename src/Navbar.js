import React from "react";
import Firebase from "./Firebase";
import "./App.css";
import { GameContext } from "./GameContext";
import { sayHi } from "./Functions";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <span>Instructions</span>
      <span>Watch Demo</span>
      <span>About</span>
    </div>
  );
};
export default withRouter(Navbar);
