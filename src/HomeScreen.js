import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import {} from "./Functions";
import "./App.css";

const HomeScreen = (props) => {
  React.useEffect(() => {}, []);

  return (
    <>
      <div className="homeScreen">
        <div style={{ borderRadius: "30px" }} className="titleHeader">
          <h1 style={{ marginTop: "25px" }} id="title">
            Out of Character
          </h1>
          <h2 className="subTitle" style={{ color: "navy" }}>
            Giving Video-Call Conversations a Kick
          </h2>
        </div>
        <button
          onClick={() => {
            props.history.push("/starting");
          }}
        >
          Play Here
        </button>
        <div className="enderDiv" style={{ width: "60%", margin: "0 auto" }}>
          <h2>Is it a game?</h2>
          <h3>No. Well, kind of</h3>
          <h4>
            The goal was to <b id="bestOf">gamify conversations</b>, creating
            something with the natural flow and information exchange of a
            conversation with the levity of a game. It's not a game or a
            conversation. <b id="bestOf">It's kind of the best of both.</b>
          </h4>
        </div>
        <div className="parent">
          <div className="box1">
            <h3>How it works:</h3>
            <div className="listDiv">
              <ol style={{ textAlign: "left" }}>
                <li style={{ display: "inlineBlock", textAlign: "left" }}>
                  Open up a video chat with your friends
                </li>
                <li style={{ display: "inlineBlock", textAlign: "left" }}>
                  Create the game
                </li>
                <li style={{ display: "inlineBlock", textAlign: "left" }}>
                  Send the links to the game
                </li>
                <li style={{ display: "inlineBlock", textAlign: "left" }}>
                  Do what the prompts say
                </li>
                <li style={{ display: "inlineBlock", textAlign: "left" }}>
                  <b id="bestOf">Let madness ensue</b>
                </li>
              </ol>
            </div>
          </div>
          <div className="box2">
            <iframe
              width="336"
              height="189"
              src="https://www.youtube.com/embed/gFdyNPL5z3w"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div
          style={{
            width: "80%",
            margin: "0 auto",
          }}
        >
          <p>
            These days, more people are living and working remotely and living
            their lives online, and there's nothing wrong with that. We still
            talk to our friends, our bosses, and our significant others. We
            still have meetings and happy hours. We still talk quite a bit it
            seems. However, people are starting to notice what has always been
            true:{" "}
          </p>
          <h2 id="bigWords">
            Sometimes conversations can be boring. Even when it's with people we
            love, sometimes there's just not much to say.
          </h2>
        </div>

        <button
          style={{ marginTop: "30px" }}
          onClick={() => {
            props.history.push("/starting");
          }}
        >
          Play Here
        </button>
        <div className="lastDiv">
          {" "}
          <h2>Great for:</h2>
          <h4>Happy Hours with Friends</h4>
          <h4>Lunches with your coworkers</h4>
          <h4>Video calls with Family</h4>{" "}
        </div>
      </div>
    </>
  );
};

export default withRouter(HomeScreen);
