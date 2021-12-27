import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyCSg5xBV7GIbj1euSEBBDxmqO8dzD2YGn0",
  authDomain: "react-todo-9003b.firebaseapp.com",
  projectId: "react-todo-9003b",
  storageBucket: "react-todo-9003b.appspot.com",
  messagingSenderId: "819491467421",
  appId: "1:819491467421:web:951045b9bbdb326bf6a474"
});

export const db = getFirestore(app);
