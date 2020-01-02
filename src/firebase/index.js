import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBGEv4wfdvGojC39Ems2h_h__wkyqti6VE",
    authDomain: "big-pro-f7253.firebaseapp.com",
    databaseURL: "https://big-pro-f7253.firebaseio.com",
    projectId: "big-pro-f7253",
    storageBucket: "big-pro-f7253.appspot.com",
    messagingSenderId: "1020653795863",
    appId: "1:1020653795863:web:6e9e7d2adc4c8e8aa2ba52"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const storage = firebase.storage()

export { firebase, database, storage as default}