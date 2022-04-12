// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwKOHYrlXjrvM_8QjH0QciKNxmq4uLgDU",
    authDomain: "ema-john-practice-a7429.firebaseapp.com",
    projectId: "ema-john-practice-a7429",
    storageBucket: "ema-john-practice-a7429.appspot.com",
    messagingSenderId: "950548486569",
    appId: "1:950548486569:web:e602a7785a9cae09318cb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;