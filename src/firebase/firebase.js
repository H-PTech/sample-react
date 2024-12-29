//Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK5LYWd2-4SJ2bVrk6-eqn0XAYAcvaBYI",
  authDomain: "fir-newsstream-b8f7d.firebaseapp.com",
  projectId: "fir-newsstream-b8f7d",
  storageBucket: "fir-newsstream-b8f7d.firebasestorage.app",
  messagingSenderId: "973019058549",
  appId: "1:973019058549:web:17a36b32911a64b1de033c",
  measurementId: "G-2PDGHC2ZFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);