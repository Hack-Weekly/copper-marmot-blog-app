// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAonbLKqbQDR4maPYZqF9bQOs3VlNj6FSY",
  authDomain: "copper-marmot-blog-app.firebaseapp.com",
  projectId: "copper-marmot-blog-app",
  storageBucket: "copper-marmot-blog-app.appspot.com",
  messagingSenderId: "894155339223",
  appId: "1:894155339223:web:8dc990f3cf23c6f0eec792",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);