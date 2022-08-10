import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAk6UvNyo6wy4PO-DVzMPxlkvLijXWmpV4",
    authDomain: "pizarra-a7a94.firebaseapp.com",
    projectId: "pizarra-a7a94",
    storageBucket: "pizarra-a7a94.appspot.com",
    messagingSenderId: "62273811532",
    appId: "1:62273811532:web:28ff2f0bc078c679a4b0e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const db = getFirestore(app);