// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbHqyZFiWEqCfuFb8L6jijOoT3otMxKJk",
    authDomain: "mystore-314e2.firebaseapp.com",
    projectId: "mystore-314e2",
    storageBucket: "mystore-314e2.appspot.com",
    messagingSenderId: "927901312846",
    appId: "1:927901312846:web:ec0e33345ad116d538201f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);