import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAMZxPC-NZtqWUX8QX24jVUMLQ6d4kNFZc",
    authDomain: "reactjs-bfa51.firebaseapp.com",
    projectId: "reactjs-bfa51",
    storageBucket: "reactjs-bfa51.appspot.com",
    messagingSenderId: "354355679550",
    appId: "1:354355679550:web:d7a96cebd4117845441c6f",
    measurementId: "G-261X588T51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// const analytics = getAnalytics(app);