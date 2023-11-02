// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMWlOLdB-etUmmi3ANZvHQVZhzTufWuZs",
  authDomain: "amarenga-d28da.firebaseapp.com",
  projectId: "amarenga-d28da",
  storageBucket: "amarenga-d28da.appspot.com",
  messagingSenderId: "590639022215",
  appId: "1:590639022215:web:8edf97a6cb1ad5c7223822",
  measurementId: "G-716M6GH294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
