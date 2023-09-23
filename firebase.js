// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfiueRqh0goh3xpkk0zw4QbRK0nlSNZSs",
  authDomain: "react-authentication-a7e3c.firebaseapp.com",
  projectId: "react-authentication-a7e3c",
  storageBucket: "react-authentication-a7e3c.appspot.com",
  messagingSenderId: "733304630876",
  appId: "1:733304630876:web:b3698aa21cc36fd037c099",
  measurementId: "G-7Z2HF4FNE9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;