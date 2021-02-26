import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBW1ldU-i4jlOOjlqDruwlED4rFRisxeNM",
    authDomain: "slack-clone-d4259.firebaseapp.com",
    projectId: "slack-clone-d4259",
    storageBucket: "slack-clone-d4259.appspot.com",
    messagingSenderId: "191914299653",
    appId: "1:191914299653:web:bcc3c592a2630eead8a76c",
    measurementId: "G-M93T4XHE8R"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db;