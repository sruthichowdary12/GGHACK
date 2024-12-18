// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import getAuth for authentication
import { getAnalytics } from "firebase/analytics";  // If you want analytics

// Firebase configuration from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCDSo2Hb64zNilgia3pHmy0UYMSA5MeR64",
  authDomain: "glamgenie-14789.firebaseapp.com",
  projectId: "glamgenie-14789",
  storageBucket: "glamgenie-14789.firebasestorage.app",
  messagingSenderId: "1081140608778",
  appId: "1:1081140608778:web:cbfb444f59be134c2844f3",
  measurementId: "G-QXM36T2XG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Initialize Firebase Authentication
const analytics = getAnalytics(app);  // Optional: For Analytics

// Export auth for use in your app
export { auth };
