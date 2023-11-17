// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"
import { getFirestore, getDocs, collection } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOHaLO7KETs-vk-VW4ckYUxzhos9s74v8",
  authDomain: "link-pass-e6613.firebaseapp.com",
  projectId: "link-pass-e6613",
  storageBucket: "link-pass-e6613.appspot.com",
  messagingSenderId: "146931465296",
  appId: "1:146931465296:web:45a9e625cbed8448c5e555",
  measurementId: "G-F5Z64CNZZV"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
const db = getFirestore(FIREBASE_APP)
const database = getDatabase(FIREBASE_APP)

export const getLinks = () => getDocs(collection(db, "dbLinks"))
