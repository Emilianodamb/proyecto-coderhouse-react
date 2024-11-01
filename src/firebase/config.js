import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB5VfmojW8hwRKfeMRnwhvQ04v5ozpLNLk",
  authDomain: "mobilestore-de33e.firebaseapp.com",
  projectId: "mobilestore-de33e",
  storageBucket: "mobilestore-de33e.firebasestorage.app",
  messagingSenderId: "710243610276",
  appId: "1:710243610276:web:da59c4634f7dcf97570031"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)