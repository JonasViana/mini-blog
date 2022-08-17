import { getFirestore } from 'firebase/firestore'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAYJLAqwMsWMXs_7flcwxjeXcIMAN5Hi-g",
  authDomain: "blog-d6080.firebaseapp.com",
  projectId: "blog-d6080",
  storageBucket: "blog-d6080.appspot.com",
  messagingSenderId: "254325597106",
  appId: "1:254325597106:web:696d2bc7a62d2a2a89baab"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }
