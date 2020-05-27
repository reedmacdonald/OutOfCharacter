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
          <h1 id="title">Out of Character</h1>
          <h2 style={{ color: "blue" }} className="subTitle">
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
            <b>
              Sometimes conversations can be boring. Even when it's with people
              we love, sometimes there's just not much to say.
            </b>
          </p>
        </div>
        <div className="parent">
          <div className="box1">
            <h2>Great for:</h2>
            <h4>Happy Hours with Friends</h4>
            <h4>Lunches with your coworkers</h4>
            <h4>Video calls with Family</h4>
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
        <button
          style={{ marginTop: "120px" }}
          onClick={() => {
            props.history.push("/starting");
          }}
        >
          Play Here
        </button>
        <div className="parent2">
          <div className="box3">
            <iframe
              width="336"
              height="189"
              src="https://www.youtube.com/embed/ORrnTbIwUbI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="box4">
            <h1>idk</h1>
            <h2>idk</h2>
          </div>
        </div>
        <div>
          <h3>How it works:</h3>
          <div className="listDiv">
            <ol>
              <li>Open up a video chat with your friends</li>
              <li>Create the game</li>
              <li>Send the links to the game</li>
              <li>Do what the prompts say</li>
              <li>Let madness ensue</li>
            </ol>
          </div>
        </div>
        <div className="enderDiv" style={{ width: "60%", margin: "0 auto" }}>
          <h2>Is it a game?</h2>
          <h3>No. Well, kind of</h3>
          <h4>
            The goal was to gamify conversations, creating something with the
            natural flow and information exchange of a conversation with the
            levity of a game. It's not a game or a conversation.{" "}
            <b>It's kind of the best of both.</b>
          </h4>
        </div>
      </div>
    </>
  );
};

export default withRouter(HomeScreen);
