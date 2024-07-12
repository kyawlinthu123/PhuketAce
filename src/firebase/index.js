import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQu7Ssw32G_Cf1TpwoiNqmP9B0IiSgAWw",
  authDomain: "phuketace.firebaseapp.com",
  projectId: "phuketace",
  storageBucket: "phuketace.appspot.com",
  messagingSenderId: "382796732527",
  appId: "1:382796732527:web:281856dd02fb8e3a79d59a",
  measurementId: "G-J322FB5WQG"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
