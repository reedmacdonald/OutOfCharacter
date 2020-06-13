import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Firebase, { auth, analytics } from "./Firebase";
const IntroRoom = (props) => {
  const [heading, setHeading] = React.useState("Team Building");
  const [description, setDescription] = React.useState(
    "This category is geared towards team building for remote teams. While it's not as 'edgy' as some of the other categories, the topics steer the conversation in zany directions while also poking fun at traditional tropes of office/work life"
  );
  const [examples, setExamples] = React.useState([
    "The next time you speak, use the phrase ‘I’m just thinking of the big picture here’",
    "After your coworker says something, say ‘piggybacking off of what [insert name] said,’ and restate what they said but in your own words",
    "This topic of conversation has gone on long enough! Say 'Let's circle back to that' to move the conversation forward",
    "Mimic the last meme or giphy that you sent in Slack",
  ]);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);
  React.useEffect(() => {
    setRoom(props.match.params.roomType);
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setCurrentUser(user.email);
      } else {
        setCurrentUser(null);
      }
    });
    document.body.style = "background: #210f63;";
  }, []);
  const checkIfBlocked = () => {
    if (
      props.match.params.roomType == "characterBased" ||
      props.match.params.roomType == "greece" ||
      props.match.params.roomType == "family"
    ) {
      if (!currentUser) {
        setErrorMessage("You have to log in to play that category");
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  const setRoom = (something) => {
    if (something == "characterBased") {
      setHeading("Character Based");
      setDescription(
        "All of these prompts begin with 'You are' so people will be playing characters the whole time. People who like improv will probably gravitate towards this one"
      );
      setExamples([
        "You are yourself from 10 years in the future",
        "You are Billie Eilish",
        "You are the wingman/hypeman/side-kick of another person in the chat. Pick whoever",
      ]);
    }
    if (something == "politics") {
      setHeading("Politics");
      setDescription(
        "All of these prompts involve politics in some sense, so be ready to have a completely off-the-rails conversation about current events"
      );
      setExamples([
        "'How are we going to pay for it?' Say something that Amy Klobuchar might say",
        "You are a comedian who is doing the same dry anti-SJW routine. Complain about hyper-sensitivity in comedy or America",
        "In a Joe Biden-esque fashion, say ‘Look, the fact is…’ or address someone as ‘Jack’",
      ]);
    }
    if (something == "date") {
      setHeading("Date Icebreaker");
      setDescription(
        "This one is mainly for breaking the ice while talking to someone you met on a dating app over video chat. It's a great way to get to know someone while adding levity to the conversation"
      );
      setExamples([
        "Say something that you heard about on a podcast",
        "Say something about Adam Driver or a movie that Adam Driver has been in. Bonus points if it's Lena Dunham's HBO show Girls",
        "Say 'Hmmm, that's pretty interesting' while furrowing your brow",
      ]);
    }

    if (something == "family") {
      setHeading("Family");
      setDescription(
        "Talking to family sometimes isn't easy. This category kicks off family video calls by adding a twist to things that families generally talk about"
      );
      setExamples([
        "Jokingly bring up the worst genetic trait of the family (obesity, depression, etc.)",
        "Reminise fondly about a memory that never happened",
        "Ask about the ex-partner of the person who has gone through a breakup most recently",
        "You are the most culturally aware member of the family! Bring up something and say you read about in The New Yorker",
      ]);
    }
    if (something == "absurd") {
      setHeading("Absurd");
      setDescription(
        "This game's original category, Absurd intends to do it's name justice and create wild and fun conversation"
      );
      setExamples([
        "Use the phrase 'I know a lot of people would argue about this' before saying something that no semi-intelligent person would argue about",
        "A ghost has entered your room, but you cannot interact with the ghost. But its in your room and you`re fucking terrified, but no one else can know why",
        "We're back to the Bush administration! Make a reference that is soooooooo 2004.",
      ]);
    }
    if (something == "greece") {
      setHeading("Greek Mythology");
      setDescription(
        "In this epic category, participants will make their way through the heros and villains of Greek Mythology while exploring some popular themes like jealousy, arrogance, and courage"
      );
      setExamples([
        "You are King Aegeus! Jump to a really bad and incorrect conclusion about something someone said!",
        "You got this, Perseus! While contributing to the conversation, don't look at the camera or at anyone else. Bonus points if you look at someone through a phone camera or cup or something.",
        "Fall madly in love with the next person you address to the point where you have difficulty completing your thought",
      ]);
    }
    if (something == "officeBanter") {
      setHeading("Team Building");
      setDescription(
        "This category is geared towards team building for remote teams. While it's not as 'edgy' as some of the other categories, the topics steer the conversation in zany directions while also poking fun at traditional tropes of office/work life"
      );
      setExamples([
        "The next time you speak, use the phrase ‘I’m just thinking of the big picture here’",
        "After your coworker says something, say ‘piggybacking off of what [insert name] said,’ and restate what they said but in your own words",
        "This topic of conversation has gone on long enough! Say 'Let's circle back to that' to move the conversation forward",
        "Mimic the last meme or giphy that you sent in Slack",
      ]);
    }
  };
  const seeNextTopic = () => {
    analytics.logEvent("Clicked See Next Topic", {
      who: "idk",
    });
    setErrorMessage(null);
    if (
      props.match.params.roomType == "politics" ||
      !!!props.match.params.roomType
    ) {
      props.history.push("/intro/characterBased");

      setRoom("characterBased");
    }
    if (
      props.match.params.roomType == "characterBased" ||
      !!!props.match.params.roomType
    ) {
      props.history.push("/intro/politics");

      setRoom("politics");
    }
    if (props.match.params.roomType == "politics") {
      props.history.push("/intro/date");

      setRoom("date");
    }
    if (props.match.params.roomType == "date") {
      props.history.push("/intro/family");

      setRoom("family");
    }

    if (props.match.params.roomType == "family") {
      props.history.push("/intro/absurd");

      setRoom("absurd");
    }
    if (props.match.params.roomType == "absurd") {
      props.history.push("/intro/greece");

      setRoom("greece");
    }
    if (props.match.params.roomType == "greece") {
      props.history.push("/intro/officeBanter");

      setRoom("officeBanter");
    }
  };
  return (
    <div id="section1">
      <div style={{ borderRadius: "30px" }} className="titleHeader">
        <h1 id="title">Out of Character</h1>
        <h2 className="subTitle" style={{ color: "#e63946" }}>
          Category: {heading}
        </h2>
      </div>
      <div>
        <button className="seeThrough" onClick={seeNextTopic}>
          See Next Category
        </button>
      </div>
      <div
        className="section2"
        style={{
          backgroundColor: "#210f63",
          color: "white",
          width: "80%",
          margin: "0 auto",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "30px 0",
          paddingBottom: "0px",
        }}
        id="gameDescriptionText"
      >
        <h2>{description}</h2>
      </div>
      <h3 style={{ color: "white" }}>Topics Include:</h3>
      <div className="intros">
        {examples.map((val, index) => {
          return (
            <h3 style={{ color: "white" }}>
              {index + 1}. {val}
            </h3>
          );
        })}
      </div>
      <button
        style={{ marginTop: "30px" }}
        className="buttonOne"
        onClick={() => {
          analytics.logEvent("Clicked Start Intro", {
            who: "idk",
          });
          if (!!checkIfBlocked()) {
            props.history.push(
              `/starting/${props.match.params.roomType || "officeBanter"}`
            );
          }
        }}
      >
        Play Here
      </button>
      <div>
        <small id="errorIntro">{errorMessage}</small>
      </div>
    </div>
  );
};
export default withRouter(IntroRoom);
