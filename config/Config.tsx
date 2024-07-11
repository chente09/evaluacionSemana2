import { getDatabase } from "firebase/database";
import { getAuth} from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';  
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmC4ZBAC0HoGw4cA6hJB6JRs_5IPmvgn0",
  authDomain: "vn-prueba.firebaseapp.com",
  projectId: "vn-prueba",
  storageBucket: "vn-prueba.appspot.com",
  messagingSenderId: "756569455114",
  appId: "1:756569455114:web:ca98520fe4a274fa0a7df3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);
// export const auth = getAuth();

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});