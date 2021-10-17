import { useEffect, useState } from "react"
import initializeApplication from "../firebase/firebase.init";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";

initializeApplication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    })
    const handlePasswordChange = e => {
        const changedPassword = e.target.value;
        setPassword(changedPassword)
    }
    const handleEmailChange = e => {
        const changedEmail = e.target.value;
        console.log(changedEmail)
        setEmail(changedEmail)
    }
    const handleSubmit = e => {
        e.preventDefault()
    }
    const SigningInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }
    const userLogin = () => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const userRegister = () => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
            }).catch((error) => setError(error.message))

    }
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }
    return {
        user,
        setUser,
        password,
        setPassword,
        SigningInWithGoogle,
        userLogin,
        userRegister,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        error,
        setError,
        handleSubmit
    }

}
export default useFirebase;