import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
var config = {
    apiKey: "AIzaSyChYEyKvPuyqQ9-WDjzbinxoN8YCTtXcp8",
    authDomain: "shin-dealer-a4fff.firebaseapp.com",
    databaseURL: "https://shin-dealer-a4fff.firebaseio.com",
    projectId: "shin-dealer-a4fff",
    storageBucket: "shin-dealer-a4fff.appspot.com",
    messagingSenderId: "712305855079",
    appId: "1:712305855079:web:76857dbe56b1624119e2c2",
    measurementId: "G-GH9WJPFH57"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})
  firebase.analytics();

  export default firebase;