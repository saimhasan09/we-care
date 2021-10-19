import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from '../Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const signInUsingGoogle = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    const handelName = (event) => {
        setName(event.target.value)
    }
    const HandelEmail = (event) => {
        setEmail(event.target.value)
    }
    const HandelPassword = (event) => {
        setPassword(event.target.value);
    }
    const signUpwithPassword = (e) => {
        e.preventDefault();

        if (password.length < 8) {
            setError('Password Should be 2 uppercase and 8 character long')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('Registation successful')
                setUser(user)

            })
    }
    const signInwithpass = () => {

        return signInWithEmailAndPassword(auth, email, password)

    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut, signInwithpass,
        HandelEmail,
        HandelPassword, error,
        password, email, signUpwithPassword, handelName, name, signInWithEmailAndPassword
    }
}
export default useFirebase;