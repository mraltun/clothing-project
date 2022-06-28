import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// App's Firebase configuration. You can get this from Project settings in the Firebase Console
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

// Provide is a class and we can have multiple instances of it so we need "New"
const googleProvider = new GoogleAuthProvider();

// When user interacts with our provider we force them to select an account.
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Initialize Firestore Database
export const db = getFirestore();

// Google wants us to do things asynchronous so don't forget async / await
export const createUserDocumentFromAuth = async (userAuth) => {
  // Doc takes three parameters. The first one is database, the second one is collection and the third one is identifier. When we log in with Google the returning object has an unique identifier called "uid" we use that as identifier.
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // If userSnapshot doesn't exists, we create it with our object
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userDocRef;
};
