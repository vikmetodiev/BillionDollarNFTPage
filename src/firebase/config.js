import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyAHmJKgaCdUsg9yJfjlmw7TR6TrLDdixgY",
  authDomain: "onebilliondollarpage.firebaseapp.com",
  projectId: "onebilliondollarpage",
  storageBucket: "onebilliondollarpage.appspot.com",
  messagingSenderId: "674412643078",
  appId: "1:674412643078:web:e644d167ecc6e0ceeb5487",
  measurementId: "G-KS2ST8R6C6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = firebase
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {app, projectStorage, projectFirestore, timestamp };