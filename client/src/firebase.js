// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "mern-estate-1c399.firebaseapp.com",
  projectId: "mern-estate-1c399",
  storageBucket: "mern-estate-1c399.appspot.com",
  messagingSenderId: "1025737717415",
  appId: "1:1025737717415:web:9845adc9af44545053cd82"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
