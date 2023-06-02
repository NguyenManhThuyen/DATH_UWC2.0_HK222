const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyAKG17r3q6VrJ7w3qV8JKpNQ2Xl4kioulM",
    authDomain: "test-2431c.firebaseapp.com",
    projectId: "test-2431c",
    storageBucket: "test-2431c.appspot.com",
    messagingSenderId: "566585299517",
    appId: "1:566585299517:web:a65f6278f2b77662139054"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("data");
module.exports = User;