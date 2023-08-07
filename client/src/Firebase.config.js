import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyACo9lvuaEnIqhYQm8ILpwfdCiqzQh7H20",
  authDomain: "food-delivery-app-30cf3.firebaseapp.com",
  databaseURL: "https://food-delivery-app-30cf3-default-rtdb.firebaseio.com",
  projectId: "food-delivery-app-30cf3",
  storageBucket: "food-delivery-app-30cf3.appspot.com",
  messagingSenderId: "421921669614",
  appId: "1:421921669614:web:77435f02346dc4d0f10eff",
  measurementId: "G-YEPCZVCECR",
};
const app = getApps.length < 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, storage };
