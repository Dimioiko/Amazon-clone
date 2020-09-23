import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVruEUUkGy1mELr5UZuBtqcIS2bNR6a9Q",
  authDomain: "clone-39f6d.firebaseapp.com",
  databaseURL: "https://clone-39f6d.firebaseio.com",
  projectId: "clone-39f6d",
  storageBucket: "clone-39f6d.appspot.com",
  messagingSenderId: "972381029563",
  appId: "1:972381029563:web:371493d125223ca06cd59e",
  measurementId: "G-P8317JCZB1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };