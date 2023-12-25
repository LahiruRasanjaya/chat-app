// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrC6ocNwsdsmFpnu8LX9LSalZpJNxBubQ",
    authDomain: "to-do-app-ef798.firebaseapp.com",
    projectId: "to-do-app-ef798",
    storageBucket: "to-do-app-ef798.appspot.com",
    messagingSenderId: "342923061089",
    appId: "1:342923061089:web:eedb5de834e17c4ffb4720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth};