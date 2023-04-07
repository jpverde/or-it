// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4a6EZrrdZoxdxF2mx8LXvQUjY2ll1dwM",
  authDomain: "or-it-6defc.firebaseapp.com",
  projectId: "or-it-6defc",
  storageBucket: "or-it-6defc.appspot.com",
  messagingSenderId: "206277956866",
  appId: "1:206277956866:web:5f218e73abf2606eab1e1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
