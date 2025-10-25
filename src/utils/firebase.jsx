// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZApyTJVulsG6UwqUo3iIRD6Qab7GJlPw",
  authDomain: "movie-flix-gpt.firebaseapp.com",
  projectId: "movie-flix-gpt",
  storageBucket: "movie-flix-gpt.firebasestorage.app",
  messagingSenderId: "927329320179",
  appId: "1:927329320179:web:c4e5550330ac99d21d0b86",
  measurementId: "G-24WX5C59J0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
