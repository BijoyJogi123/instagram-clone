//This is for FIREBASE

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCbYYoAnWFbOzTx_we83_k1AA3CrSMQHDY",

  authDomain: "instagram-clone-5951b.firebaseapp.com",

  projectId: "instagram-clone-5951b",

  storageBucket: "instagram-clone-5951b.appspot.com",

  messagingSenderId: "20906621704",

  appId: "1:20906621704:web:4e3fe2fa114cb237144abd",

  measurementId: "G-3VN9FRYJK0"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export default storage;