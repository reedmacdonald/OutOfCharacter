import React from "react";
import Firebase, { auth } from "./Firebase";
const db = Firebase.firestore();

export const createRoom = (room, info) => {
  db.collection("word").doc(room).set(info);
};
export const updateRoom = (room, info) => {
  db.collection("word").doc(room).update(info);
};
export const getSnapshot = (room, callback) => {
  db.collection("word")
    .doc(room)
    .onSnapshot(function (doc) {
      //console.log("Current data: ", doc.data());
      doc.data() && callback(doc.data());
      return doc.data();
    });
};

export const getDoc = (room, callback) => {
  db.collection("word")
    .doc(room)
    .get()
    .then(function (doc) {
      if (doc.exists) {
        //console.log("Document data:", doc.data());
        callback(doc.data());
        return doc.data();
      } else {
        //doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function (error) {
      //console.log("Error getting document:", error);
    });
};

export const deleteDoc = (room) => {
  db.collection("word")
    .doc(room)
    .delete()
    .then(function () {
      console.log("Document successfully deleted!");
    })
    .catch(function (error) {
      console.error("Error removing document: ", error);
    });
};
export const SignUp = (email, password, callback, errorCallback) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      //this.setState({ ...INITIAL_STATE });
      //this.props.history.push(ROUTES.HOME);
      console.log(authUser, "<---authUser");
      console.log("here");
    })
    .catch((error) => {
      //this.setState({ error });
      console.log("here2");
      console.log(error, "<---error");
      errorCallback(error);
    });
};
