import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn29-aqIg1VB6jr1jKyawlJOV2LDEl0Fo",
  authDomain: "rapsbol.firebaseapp.com",
  projectId: "rapsbol",
  storageBucket: "rapsbol.firebasestorage.app",
  messagingSenderId: "472273089221",
  appId: "1:472273089221:web:fca4b11b76431353e2f6ac",
  measurementId: "G-KFFHK0KV3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
