import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAPlYDoaeu5L25Y_yBlMm9XOYCMzhWhriE",
    authDomain: "qwizard-e8f0e.firebaseapp.com",
    projectId: "qwizard-e8f0e",
    storageBucket: "qwizard-e8f0e.appspot.com",
    messagingSenderId: "1021241474611",
    appId: "1:1021241474611:web:96540a63ae85760ae52d46",
};

// Initialize Firebase
const firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;