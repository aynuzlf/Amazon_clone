// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDm9RaUg2Xth90yDNGuQhCbZq43HYbmjDM",
    authDomain: "feb22-243ab.firebaseapp.com",
    projectId: "feb22-243ab",
    storageBucket: "feb22-243ab.appspot.com",
    messagingSenderId: "860215121917",
    appId: "1:860215121917:web:adb7ec15a240134fc2eb94",
    measurementId: "G-V0YH0SKM77"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth}