import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import {} from "./Functions";
import "./App.css";
import Moose from "./Object.svg";
import Firebase, { auth, analytics } from "./Firebase";

const HomeScreen = (props) => {
  React.useEffect(() => {
    document.body.style = "background:#99d6f2";
  }, []);

  return (
    <>
      <div id="section1">
        <div style={{ borderRadius: "30px" }} className="titleHeader">
          <h1 id="title">Out of Character</h1>
          <h2 className="subTitle">Giving Video-Call Conversations a Kick</h2>
        </div>
        <button
          className="buttonOne"
          onClick={() => {
            analytics.logEvent("Clicked Start Game Home Screen", {
              who: "idk",
            });
            props.history.push("/starting");
          }}
        >
          Play Here
        </button>
      </div>
      <div className="section2">
        <div className="enderDiv" style={{ width: "60%", margin: "0 auto" }}>
          <p id="section3words">Is it a game?</p>
          <h4 id="section3Text">
            No. Well, kind of.
            <br /> The goal is the{" "}
            <b id="bestOf">gamification of conversations</b>, creating something
            with the natural flow and information exchange of a conversation but
            with the levity of a game. It's not a game or a conversation.{" "}
            <b id="bestOf">It's kind of the best of both.</b>
          </h4>
        </div>
      </div>
      <div className="parent" id="section4">
        <div className="box1">
          <h3 style={{ textAlign: "left" }}>How it works:</h3>
          <div className="listDiv" style={{ textAlign: "left" }}>
            <h3 className="section4List" style={{ textAlign: "left" }}>
              <sup>1</sup> Open up a video chat with others
            </h3>
            <h3 className="section4List" style={{ textAlign: "left" }}>
              <sup>2</sup> Start a game
            </h3>
            <h3 className="section4List" style={{ textAlign: "left" }}>
              <sup>3</sup> Send the links to the game
            </h3>
            <h3 className="section4List" style={{ textAlign: "left" }}>
              <sup>4</sup> Do what the prompts say
            </h3>
            <h3 className="section4List" style={{ textAlign: "left" }}>
              <sup>5</sup> <b id="bestOf">Let madness ensue</b>
            </h3>
          </div>
        </div>

        <div className="box2">
          <iframe
            width="448"
            height="304"
            src="https://www.youtube.com/embed/nhNJlGzTHEQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div>
        <button
          style={{ marginTop: "30px", marginBottom: "30px" }}
          className="yellowButton"
          onClick={() => {
            analytics.logEvent("Clicked View Categories Home Screen", {
              who: "idk",
            });
            props.history.push("/intro");
          }}
        >
          See Categories
        </button>
      </div>
      <div id="section5">
        <div
          style={{
            width: "60%",
            margin: "0 auto",
          }}
        >
          <h3 style={{ textAlign: "left" }}>
            These days, more people are working remotely<span>*</span> and
            living their lives online, and there's nothing wrong with that. We
            still talk to our friends, our bosses, and our significant others.
            We still have meetings and happy hours. We still talk quite a bit.
            However, people are starting to notice what has always been true:{" "}
          </h3>
          <h2 id="bigWords" style={{ textAlign: "left", marginBottom: 0 }}>
            Sometimes conversations can be boring. Even when it's with people we
            love, sometimes there's just not much to say.
          </h2>
        </div>
      </div>
      <div id="section7">
        <button
          className="buttonOne"
          style={{ marginTop: "30px" }}
          onClick={() => {
            analytics.logEvent("Clicked Second Start Game Home Screen", {
              who: "idk",
            });
            props.history.push("/starting");
          }}
        >
          Play Here
        </button>
        <div className="lastDiv">
          {" "}
          <div id="oppositeMoose">
            <h5>Great for:</h5>
            <h2>
              <sup>1</sup> Remote Team Building
              <span
                onClick={() => {
                  analytics.logEvent("Clicked on the Asterisk", {
                    who: "idk",
                  });
                  props.history.push("/intro/officeBanter");
                }}
                className="yellowSpan"
              >
                *
              </span>
            </h2>
            <h2>
              <sup>2</sup> Happy Hours with Friends
            </h2>
            <h2>
              <sup>3</sup> Video calls with Family
            </h2>{" "}
          </div>
          <div id="moose">
            <img src={Moose} alt="moose" />
          </div>
        </div>
        <div>
          <button
            style={{ marginTop: "30px", marginBottom: "30px" }}
            className="yellowButton"
            onClick={() => {
              analytics.logEvent("Clicked Second Categories Home Screen", {
                who: "idk",
              });
              props.history.push("/intro");
            }}
          >
            See Categories
          </button>
        </div>
      </div>
    </>
  );
};

export default withRouter(HomeScreen);
