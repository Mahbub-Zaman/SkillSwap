// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmc3AMEr5AjHm2V0YUX6Z2k2Mf6EgeZWM",
  authDomain: "skillswap-81f34.firebaseapp.com",
  projectId: "skillswap-81f34",
  storageBucket: "skillswap-81f34.firebasestorage.app",
  messagingSenderId: "496123234707",
  appId: "1:496123234707:web:71d2ea492d4372edb08066"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);