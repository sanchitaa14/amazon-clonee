import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAMTF0YNFo-5p0IaAOBeaLkn3hMPi1YAHI",
    authDomain: "clone-29372.firebaseapp.com",
    projectId: "clone-29372",
    storageBucket: "clone-29372.appspot.com",
    messagingSenderId: "1025161755409",
    appId: "1:1025161755409:web:2dd1224207a6b5e963eab0",
    measurementId: "G-MB3MB333KT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };