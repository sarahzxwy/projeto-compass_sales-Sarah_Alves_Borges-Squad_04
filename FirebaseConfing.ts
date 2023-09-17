import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD7JxiJCRnsCLFsTl2sjoPaFLUeVSl4hUM",
  authDomain: "compass-sales-2d608.firebaseapp.com",
  projectId: "compass-sales-2d608",
  storageBucket: "compass-sales-2d608.appspot.com",
  messagingSenderId: "1001439630878",
  appId: "1:1001439630878:web:b1876dd71b92ffa317400f"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);