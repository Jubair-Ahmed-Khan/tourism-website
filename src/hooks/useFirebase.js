import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import swal from 'sweetalert';
// import { useHistory, useLocation } from "react-router";
initializeAuthentication();

const useFirebase = () => {

    // used states for firefabse
    const [user, setUser] = useState({});
    const [isloading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // const location = useLocation();
    // const history = useHistory();

    // redirect url 
    // const redirect_uri = location.state?.from || '/home';


    // google auth 
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // google sign in 
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    // handle registration 
    const handleRegister = e => {
        setIsLoading(true);
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 charecters');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError(' Ensure string has two uppercase letters.')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.displayName);
                setUserName();
                window.location.reload();
                swal({
                    title: "You are Successfully registered!",
                    icon: "success",
                    button: "Ok",
                });
            })
            .catch((error) => {
                // setError(error.message);
                swal({
                    title: error.message,
                    icon: "error",
                    buttons: true,
                    dangerMode: true,
                })
            })
            .finally(() => setIsLoading(false));
    }

    // update display name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    // user login
    const processLogIn = e => {
        e.preventDefault();
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                // history.push(redirect_uri);
                swal({
                    title: "You are Successfully logged in!",
                    icon: "success",
                    button: "Ok",
                });
            })
            .catch((error) => {
                swal({
                    title: error.message,
                    icon: "error",
                    buttons: true,
                    dangerMode: true,
                })
            })
            .finally(() => setIsLoading(false))

    }

    // read name value
    const handleName = e => {
        setName(e.target.value)
    }

    // read email value 
    const handleEmail = e => {
        setEmail(e.target.value);

    }

    // read password 
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    // observe user state change 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });

        return () => unsubscribed;
    }, [auth])

    // logout function 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                swal({
                    title: "You are Successfully logged out!",
                    icon: "success",
                    button: "Ok",
                });
            })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        setUser,
        isloading,
        setIsLoading,
        signInUsingGoogle,
        logOut,
        handleRegister,
        handleName,
        handleEmail,
        handlePassword,
        error,
        processLogIn
    }
}

export default useFirebase;