import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
const IntroRoom = (props) => {
  const [heading, setHeading] = React.useState("Team Building");
  const [description, setDescription] = React.useState(
    "Doggo ipsum shoober what a nice floof mlem shooberino very hand gjvjvjgv gjhgfhgj gfjhgfhgfghfjfjhgfjhgfhgfjh"
  );
  const [examples, setExamples] = React.useState(["idk", "idk", "idk"]);
  React.useEffect(() => {
    if (props.match.params.roomType == "characterBased") {
      setHeading("Character Based");
      setDescription("This is the one where you do characters");
    }
    //("politics");
    //("date");
    //("family");
  }, []);
  return (
    <div id="section1">
      <div style={{ borderRadius: "30px" }} className="titleHeader">
        <h1 id="title">Out of Character</h1>
        <h2 className="subTitle" style={{ color: "#e63946" }}>
          {heading}
        </h2>
      </div>
      <div
        className="section2"
        style={{
          backgroundColor: "#210f63",
          color: "white",
          width: "60%",
          margin: "0 auto",
        }}
        id="gameDescriptionText"
      >
        <h2>{description}</h2>
      </div>
      {examples.map((val, index) => {
        return (
          <h3 style={{ color: "white" }}>
            {index + 1}. {val}
          </h3>
        );
      })}
      <button
        className="buttonOne"
        onClick={() => {
          props.history.push("/starting");
        }}
      >
        Play Here
      </button>
    </div>
  );
};
export default withRouter(IntroRoom);
