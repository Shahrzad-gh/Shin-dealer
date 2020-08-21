
import firebase from 'firebase/app';
import "firebase/firestore";
import 'firebase/auth'
   
// Initialize Firebase

var config = {
    apiKey: "AIzaSyDgd1413_Upp347BeP8v8oLTeUlF7I5VIE",
    authDomain: "shin-dealer.firebaseapp.com",
    databaseURL: "https://shin-dealer.firebaseio.com",
    projectId: "shin-dealer",
    storageBucket: "shin-dealer.appspot.com",
    messagingSenderId: "796810654974",
    appId: "1:796810654974:web:dba1b4633c272cc81f21af",
    measurementId: "G-SLE75BLFS7"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;