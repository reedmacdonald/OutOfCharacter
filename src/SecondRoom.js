import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
const SecondRoom = (props) => {
  return (
    <div className="App" style={{ color: "white" }}>
      <h1 id="title">Out of Character</h1>
      <h1>Your host has ended the game. Hope you had fun!</h1>
      <h2>
        To start a new game click{" "}
        <a href="https://www.outofcharacter.io/starting">here</a>
      </h2>
    </div>
  );
};
export default withRouter(SecondRoom);
