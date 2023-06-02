import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAKG17r3q6VrJ7w3qV8JKpNQ2Xl4kioulM",
    authDomain: "test-2431c.firebaseapp.com",
    projectId: "test-2431c",
    storageBucket: "test-2431c.appspot.com",
    messagingSenderId: "566585299517",
    appId: "1:566585299517:web:a65f6278f2b77662139054"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

// const analytics = getAnalytics(app);