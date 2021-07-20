import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB_2MET4b11SwL6Fw7RtfU92KSKoZCTuFo",
  authDomain: "clone-app-57a42.firebaseapp.com",
  projectId: "clone-app-57a42",
  storageBucket: "clone-app-57a42.appspot.com",
  messagingSenderId: "945851923694",
  appId: "1:945851923694:web:be2a3eab5d402876b347ff",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
