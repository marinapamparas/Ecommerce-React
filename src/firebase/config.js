// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUlJluckojGD82LEH2e2W7Se-SKSX7e7o",
  authDomain: "ecommercereact-83237.firebaseapp.com",
  projectId: "ecommercereact-83237",
  storageBucket: "ecommercereact-83237.appspot.com",
  messagingSenderId: "241171404985",
  appId: "1:241171404985:web:40a6ddc32f4240d6852368"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app