
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBDToYxAQ8cJaEf_ddfOLcQtsTpWt603e8",
  authDomain: "fir-auth-a0c0d.firebaseapp.com",
  projectId: "fir-auth-a0c0d",
  storageBucket: "fir-auth-a0c0d.appspot.com",
  messagingSenderId: "924364604859",
  appId: "1:924364604859:web:edbccbb64455851a86709e",
  measurementId: "G-NNHYB1Q5L4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
