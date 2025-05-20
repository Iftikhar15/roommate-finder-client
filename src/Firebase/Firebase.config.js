// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs9QXLSTfFQwbPIYz_Pi5CTjkpiCDGVE0",
  authDomain: "a9-b11-subscriptionbox.firebaseapp.com",
  projectId: "a9-b11-subscriptionbox",
  storageBucket: "a9-b11-subscriptionbox.firebasestorage.app",
  messagingSenderId: "111254047230",
  appId: "1:111254047230:web:104cc1c2fe5f663d6718af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);