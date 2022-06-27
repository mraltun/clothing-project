import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj5Mn5KXwp7nnVUjKzNc7kkNSlBVrhyKA",
  authDomain: "clothing-project-b5e91.firebaseapp.com",
  projectId: "clothing-project-b5e91",
  storageBucket: "clothing-project-b5e91.appspot.com",
  messagingSenderId: "311521614137",
  appId: "1:311521614137:web:9f24fc4b9de39933b9b0e8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
