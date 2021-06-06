import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCSg2Yo_s6VrbjoAxCLckpv3IaCD6--irs",
  authDomain: "crown-db-3bd71.firebaseapp.com",
  projectId: "crown-db-3bd71",
  storageBucket: "crown-db-3bd71.appspot.com",
  messagingSenderId: "524061170805",
  appId: "1:524061170805:web:2d0146c88d25e0f974ec3c",
  measurementId: "G-8F7N3PJ6DW",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
