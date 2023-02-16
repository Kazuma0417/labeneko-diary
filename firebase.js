// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY4C-XPYN_7lGA0qE19fLHzjSEgJBWQ1E",
  authDomain: "labeneko-diary-14bf3.firebaseapp.com",
  databaseURL: "https://labeneko-diary-14bf3-default-rtdb.firebaseio.com",
  projectId: "labeneko-diary-14bf3",
  storageBucket: "labeneko-diary-14bf3.appspot.com",
  messagingSenderId: "369584746165",
  appId: "1:369584746165:web:25271e88970c1fdf46d8fc",
  measurementId: "G-5WYHLN5GHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if(typeof window !== 'undefined'){
  const analytics = getAnalytics(app);
}

export const db = getFirestore();