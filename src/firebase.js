import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBoc7ahmK7ebzGLwtGJIfy86W1Ne8Gi3g",
  authDomain: "face-clone-9974f.firebaseapp.com",
  projectId: "face-clone-9974f",
  storageBucket: "face-clone-9974f.appspot.com",
  messagingSenderId: "10391803820",
  appId: "1:10391803820:web:64f5be2ccffa5fb26fcc09",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
