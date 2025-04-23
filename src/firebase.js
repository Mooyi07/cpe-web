// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, limit, where, orderBy } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeRVcnIaT9eYxKo-uJnELOpa2AdyR2eNc",
  authDomain: "cpe-project-2b99c.firebaseapp.com",
  projectId: "cpe-project-2b99c",
  storageBucket: "cpe-project-2b99c.firebasestorage.app",
  messagingSenderId: "762434666859",
  appId: "1:762434666859:web:ad46829bb5fdb02a3f8c2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export necessary functions from Firebase Firestore
export { db, collection, getDocs, query, limit, where, orderBy };
