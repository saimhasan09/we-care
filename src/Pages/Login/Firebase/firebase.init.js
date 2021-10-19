import { initializeApp } from "firebase/app";
import firebaseConfig from '../Firebase/firebase.config'
const firebaseAuthentication = () => {
    initializeApp(firebaseConfig);
};
export default firebaseAuthentication;