import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCcimuwjL6Jg1Whg7INQ223LnCwoQ-A_0Y",
  authDomain: "disneyplus-clone-7798f.firebaseapp.com",
  projectId: "disneyplus-clone-7798f",
  storageBucket: "disneyplus-clone-7798f.appspot.com",
  messagingSenderId: "420607443078",
  appId: "1:420607443078:web:e91136bf342c5230219107",
  measurementId: "G-429EB48Q7E"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;