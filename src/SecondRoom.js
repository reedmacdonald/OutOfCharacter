import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
const SecondRoom = (props) => {
  React.useEffect(() => {
    console.log(props, "<----props");
  }, []);
  return <h1>Hello World</h1>;
};
export default withRouter(SecondRoom);
