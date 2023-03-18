// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApifkrGIvbD1RgbEnqq5Inn4mOyKFyg-U",
  authDomain: "ouai-571d7.firebaseapp.com",
  projectId: "ouai-571d7",
  storageBucket: "ouai-571d7.appspot.com",
  messagingSenderId: "570406285700",
  appId: "1:570406285700:web:399d5d81103a173c34add1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app)
