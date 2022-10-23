// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC2woA_UQKFmrWVaUY2oSPePN88jH7Jcs",
  authDomain: "moviesiteweb-9f7e3.firebaseapp.com",
  projectId: "moviesiteweb-9f7e3",
  storageBucket: "moviesiteweb-9f7e3.appspot.com",
  messagingSenderId: "1024798401630",
  appId: "1:1024798401630:web:6bfccc500c22b4134000cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;