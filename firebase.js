import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2HOku9ipyr5etmemx5hS61WbY-nksjqI",
  authDomain: "whatsapp-beta-89b33.firebaseapp.com",
  projectId: "whatsapp-beta-89b33",
  storageBucket: "whatsapp-beta-89b33.appspot.com",
  messagingSenderId: "549879042435",
  appId: "1:549879042435:web:a342295e14cab13e3466b6",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
