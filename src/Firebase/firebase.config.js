// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7Jth5qLSQsgGFu2-L0avmOgijDO8Gno0",
  authDomain: "assignment-10-sportify.firebaseapp.com",
  projectId: "assignment-10-sportify",
  storageBucket: "assignment-10-sportify.firebasestorage.app",
  messagingSenderId: "549233551275",
  appId: "1:549233551275:web:1bfc01ba0aed26563a54ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;