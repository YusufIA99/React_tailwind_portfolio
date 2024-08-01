
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBnufmudN8IovQTaJcD5p-spIokyP5ERy0",
  authDomain: "react-contact-form-8b9aa.firebaseapp.com",
  projectId: "react-contact-form-8b9aa",
  storageBucket: "react-contact-form-8b9aa.appspot.com",
  messagingSenderId: "606648635836",
  appId: "1:606648635836:web:97ae3b9274079204555bb9",
  measurementId: "G-NM4M1VCQJT"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };