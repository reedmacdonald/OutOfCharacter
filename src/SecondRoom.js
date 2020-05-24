import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
const SecondRoom = (props) => {
  return (
    <div className="App">
      <h1>Your host has ended the game. Hope you had fun!</h1>
      <h2>
        To start a new game click{" "}
        <a href="http://www.out-of-character.netlify.app">here</a>
      </h2>
    </div>
  );
};
export default withRouter(SecondRoom);
