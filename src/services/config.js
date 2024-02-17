import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// Vamos a importar dos funciones del modulo Firebase
//initializeApp: iniciar la conexion con firebase
//getFirestore: me permite obtener una instancia del Firestore


// Esto es un objeto con toda nuestra info de la cuenta
// incluye la key personal para acceder a la bd

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "prox-gaming-store.firebaseapp.com",
  projectId: "prox-gaming-store",
  storageBucket: "prox-gaming-store.appspot.com",
  messagingSenderId: "40835839510",
  appId: "1:40835839510:web:3de4e2c6b4794177bb2737"
};

// Inicializamos Firebase y se pasa la configuracion como argumento
// Esto me retorna una instancia de Firebase
const app = initializeApp(firebaseConfig);

// Ahora uso esa instancia para obtener el servicio de Firestore:
export const db = getFirestore(app);