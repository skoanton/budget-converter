import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "budget-converter-2cb14.firebaseapp.com",
    projectId: "budget-converter-2cb14",
    storageBucket: "budget-converter-2cb14.appspot.com",
    messagingSenderId: "1022215022142",
    appId: "1:1022215022142:web:8b2fbaf6b999729bb9936f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export default db;


