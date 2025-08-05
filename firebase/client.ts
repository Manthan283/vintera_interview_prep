// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASlHWl2JqvjUQeNEPK2xSfsnxjvbbs8jU",
  authDomain: "vintera-7a704.firebaseapp.com",
  projectId: "vintera-7a704",
  storageBucket: "vintera-7a704.firebasestorage.app",
  messagingSenderId: "15342140757",
  appId: "1:15342140757:web:b1382830aa9c6b1b7103dc",
  measurementId: "G-P1JZQG2T01"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);