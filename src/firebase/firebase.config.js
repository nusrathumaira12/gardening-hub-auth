
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBPD1QuC2PmAzSC3Dwox1A9qmEbZuOgDxg",
    authDomain: "gardening-auth-project.firebaseapp.com",
    projectId: "gardening-auth-project",
    storageBucket: "gardening-auth-project.firebasestorage.app",
    messagingSenderId: "1006194756943",
    appId: "1:1006194756943:web:69455bde2a4537a27fc93a"
  };
  


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);