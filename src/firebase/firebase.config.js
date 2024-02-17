// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcXH-Jw7XqHmvYJVjXCcBdR115xqKaPgo",
  authDomain: "mern-book-inventory-d86c9.firebaseapp.com",
  projectId: "mern-book-inventory-d86c9",
  storageBucket: "mern-book-inventory-d86c9.appspot.com",
  messagingSenderId: "101340231628",
  appId: "1:101340231628:web:0f5bb7c887445537c24f69",
  measurementId: "G-K62GPNEQ3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;