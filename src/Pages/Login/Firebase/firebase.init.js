import firebaseConfig from "./firebase.config";
import { initializeApp } from 'firebase/app';

// firebase initialization 
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;