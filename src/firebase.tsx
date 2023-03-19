// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr1nh17JvBwTDOr5x2kNXjonj1SIR9KJY",
  authDomain: "or-it-107fc.firebaseapp.com",
  projectId: "or-it-107fc",
  storageBucket: "or-it-107fc.appspot.com",
  messagingSenderId: "1075288974323",
  appId: "1:1075288974323:web:0fd49002c50edb5ac92886",
  measurementId: "G-9JDF2SDTYZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
