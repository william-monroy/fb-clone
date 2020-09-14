import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCEB_tu4T19tWemUAM3JOy7LatwsSoDfJY",
    authDomain: "facebook-clone-227e6.firebaseapp.com",
    databaseURL: "https://facebook-clone-227e6.firebaseio.com",
    projectId: "facebook-clone-227e6",
    storageBucket: "facebook-clone-227e6.appspot.com",
    messagingSenderId: "946115794670",
    appId: "1:946115794670:web:cd17c34ca9fb3c8390c5ff",
    measurementId: "G-BTVS56W9TV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;