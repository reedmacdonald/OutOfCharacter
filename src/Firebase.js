import React from "react";
import firebase from "firebase";
import * as SECRETS from "./secrets";
const config = {
  apiKey: SECRETS.API,
  authDomain: "out-of-character-reed-2.firebaseapp.com",
  databaseURL: "https://out-of-character-reed-2.firebaseio.com",
  projectId: "out-of-character-reed-2",
  storageBucket: "out-of-character-reed-2.appspot.com",
  messagingSenderId: "630279598634",
  appId: "1:630279598634:web:fc490bc1ce726328adc953",
  measurementId: "G-FVTW65YL5W",
};
firebase.initializeApp(config);
export default firebase;
