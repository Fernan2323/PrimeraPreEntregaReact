import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "prox-gaming-store.firebaseapp.com",
  projectId: "prox-gaming-store",
  storageBucket: "prox-gaming-store.appspot.com",
  messagingSenderId: "40835839510",
  appId: "1:40835839510:web:3de4e2c6b4794177bb2737",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
