import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA4C0hNEK3tgE6bTD2VqY1u4VRtjj0HZV0",
    authDomain: "vuejspractice-e2169.firebaseapp.com",
    projectId: "vuejspractice-e2169",
    storageBucket: "vuejspractice-e2169.appspot.com",
    messagingSenderId: "431420928789",
    appId: "1:431420928789:web:d10ee25e8867368aebaf1c",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth }