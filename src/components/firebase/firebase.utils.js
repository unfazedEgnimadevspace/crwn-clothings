import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCN2sqsQfzKOeNXj3EUue5GpxdctlzVPh4",
  authDomain: "react-revamp.firebaseapp.com",
  projectId: "react-revamp",
  storageBucket: "react-revamp.appspot.com",
  messagingSenderId: "356707780538",
  appId: "1:356707780538:web:eb74207138317815aabf83",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userReference = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userReference.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userReference.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error occured creating user", error.message);
    }
  }
  return userReference;
};
export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapShotToMap = (collections) => {
  const tranformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return tranformedCollections.reduce((accmulator, collection) => {
    accmulator[collection.title.toLowerCase()] = collection;
    return accmulator;
  }, {});
};

firebase.initializeApp(config);
export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
