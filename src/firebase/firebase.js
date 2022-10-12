import "firebase/analytics";
import "firebase/database";
import "firebase/auth";
import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCYL0va33N4EmJSLGr0Oy-j6c2zjcTGn3Y",
  authDomain: "portofoliu-53fba.firebaseapp.com",
  databaseURL: "https://portofoliu-53fba.firebaseio.com",
  projectId: "portofoliu-53fba",
  storageBucket: "portofoliu-53fba.appspot.com",
  messagingSenderId: "152052172457",
  appId: "1:152052172457:web:907d4e0dd0fcb987244bb8",
  measurementId: "G-9MS9FWH6YR",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);
firebase.analytics();
export const firestore = firebase.firestore();

export const auth = firebase.auth();
export const messageRef = firebase.database().ref("messages");

export const messageData = firebase.database().ref("messages");

export default firebase;
