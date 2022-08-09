import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4PipekWPzxEzFFQuGAWGqrLBlGIIlQKI",
    authDomain: "board-sw1.firebaseapp.com",
    projectId: "board-sw1",
    storageBucket: "board-sw1.appspot.com",
    messagingSenderId: "865686831321",
    appId: "1:865686831321:web:a630430ce136d1d3bd3ec8",
    measurementId: "G-Z4P5VHM4QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const db = getFirestore(app);