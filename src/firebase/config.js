import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDXqAL836ielq0UwT8LfUCYHr4Akm4_DwY',
  authDomain: 'miniblog-81bcd.firebaseapp.com',
  projectId: 'miniblog-81bcd',
  storageBucket: 'miniblog-81bcd.appspot.com',
  messagingSenderId: '886885319771',
  appId: '1:886885319771:web:07f38b470954737a432b7e'
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
