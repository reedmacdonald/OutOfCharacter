import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { getDoc } from "./Functions";

const EndRoom = (props) => {
  const [prompts, setPrompts] = React.useState(["some", "prompts"]);
  React.useEffect(() => {
    getDoc(props.match.params.roomNumber.toString(), (results) => {
      setPrompts(results.task);
    });
  }, []);
  return (
    <>
      <h1>The game has ended, but that was fun! </h1>
      <h2>Here were your prompts</h2>
      {prompts.map((i) => {
        return <h3>{i}</h3>;
      })}
    </>
  );
};

export default withRouter(EndRoom);
