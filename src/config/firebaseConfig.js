import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBzqHVGIDAQhhqs4V830bAPPvSN3RXWcpQ",
  authDomain: "globun8fin.firebaseapp.com",
  projectId: "globun8fin",
  storageBucket: "globun8fin.appspot.com",
  messagingSenderId: "274358705061",
  appId: "1:274358705061:web:b241734053007bf1e7664c",
  measurementId: "G-JZ0ETV1RHC"
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();