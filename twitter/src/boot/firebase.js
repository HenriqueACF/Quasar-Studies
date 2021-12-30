import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuetHLJFrYQajaMfsniTAC39vhirEoVcM",
  authDomain: "qwitter-75e66.firebaseapp.com",
  projectId: "qwitter-75e66",
  storageBucket: "qwitter-75e66.appspot.com",
  messagingSenderId: "1026372559883",
  appId: "1:1026372559883:web:98af7152507728bbcb130e"
};

const app = initializeApp(firebaseConfig);
let db = getFirestore(app);

export default db 

// import firebase from "firebase/app"
// import "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyBuetHLJFrYQajaMfsniTAC39vhirEoVcM",
//   authDomain: "qwitter-75e66.firebaseapp.com",
//   projectId: "qwitter-75e66",
//   storageBucket: "qwitter-75e66.appspot.com",
//   messagingSenderId: "1026372559883",
//   appId: "1:1026372559883:web:98af7152507728bbcb130e"
// }

// firebase.initializeApp(firebaseConfig)

// let db = firebase.firestore()

// export default db