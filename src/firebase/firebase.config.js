// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGFWJc-pk5h2gA4WG9Ds7Si5ZHNBqGGMU",
  authDomain: "assignment-11-785f0.firebaseapp.com",
  projectId: "assignment-11-785f0",
  storageBucket: "assignment-11-785f0.appspot.com",
  messagingSenderId: "905508589275",
  appId: "1:905508589275:web:1212c715faab2d3c0346fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
