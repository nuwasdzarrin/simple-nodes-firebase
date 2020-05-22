import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB2lFqXllK5nGyW8Z4XdP45P4br94Aa4y8",
    authDomain: "simple-notes-firebase-290a1.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-290a1.firebaseio.com",
    projectId: "simple-notes-firebase-290a1",
    storageBucket: "simple-notes-firebase-290a1.appspot.com",
    messagingSenderId: "332944183331",
    appId: "1:332944183331:web:c86ec6896cc9c44446e196",
    measurementId: "G-LGXX96PXBG"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
