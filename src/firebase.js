import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDoyrm_TWpY1NM7H6jnjVLlP_aVE3iGGD8",
  authDomain: "my--clone-16c2f.firebaseapp.com",
  projectId: "my--clone-16c2f",
  storageBucket: "my--clone-16c2f.appspot.com",
  messagingSenderId: "1082006562627",
  appId: "1:1082006562627:web:d90202f18af654d9bb71f6",
  measurementId: "G-9DZB2JKMNY"
});


const auth = firebase.auth();

export{auth};