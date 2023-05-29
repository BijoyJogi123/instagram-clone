//This is for FIREBASE

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";



//here should be all the configuration for firebase
const firebaseConfig = {

  apiKey: "api-key",

  authDomain: "",

  projectId: "",

  storageBucket: "",

  messagingSenderId: "",

  appId: "",

  measurementId: ""

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export default storage;
