import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAcrUeXsKbwF3m25_gu3ya90auZ_8giHPY",
    authDomain: "challenge-greydive-dd6d1.firebaseapp.com",
    projectId: "challenge-greydive-dd6d1",
    storageBucket: "challenge-greydive-dd6d1.appspot.com",
    messagingSenderId: "738654886234",
    appId: "1:738654886234:web:bc4a3aa665ecc9c698bb63"
};

export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);