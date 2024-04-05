
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAmY42XrEtCXQrO0fwUMdStZhKl4aTD-mI",
  authDomain: "fir-d00c3.firebaseapp.com",
  projectId: "fir-d00c3",
  storageBucket: "fir-d00c3.appspot.com",
  messagingSenderId: "599569519320",
  appId: "1:599569519320:web:224a6df3e058dfc9447dad",
  measurementId: "G-VRJ6PL4V2E"
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);