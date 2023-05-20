import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyClVqamLBRzgqXQ3nDHEXZkjOw4oNJGq_w",
  authDomain: "multimart-ecommerce-93bf9.firebaseapp.com",
  projectId: "multimart-ecommerce-93bf9",
  storageBucket: "multimart-ecommerce-93bf9.appspot.com",
  messagingSenderId: "368642239492",
  appId: "1:368642239492:web:3655384742ede2679c9951",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
