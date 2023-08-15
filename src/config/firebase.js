// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMnv9Ym53Ka0tRyjt5LTFF6eLxMa6X8hQ",
  authDomain: "vite-contact-298fd.firebaseapp.com",
  projectId: "vite-contact-298fd",
  storageBucket: "vite-contact-298fd.appspot.com",
  messagingSenderId: "688504830159",
  appId: "1:688504830159:web:92a491932bfa4af1a79fba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


