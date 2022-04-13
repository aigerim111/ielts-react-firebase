import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    sendEmailVerification
} from "firebase/auth";
import {
    getFirestore,
    collection,
    addDoc,
} from "firebase/firestore";
import {useSendEmailVerification} from "react-firebase-hooks/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBAo6C8BuY762ZTaOqRz9tvk-FwziG7f_8",
    authDomain: "ielts-13784.firebaseapp.com",
    projectId: "ielts-13784",
    storageBucket: "ielts-13784.appspot.com",
    messagingSenderId: "413653727803",
    appId: "1:413653727803:web:ce3c74e722cc33c8083a1e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        if(!auth.currentUser.emailVerified){
            logout()
            alert("Verify your account!")
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(auth.currentUser)
        logout();
        alert("Check your email!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
    //     await addDoc(collection(db, "users"), {
    //         uid: user.uid,
    //         name,
    //         authProvider: "local",
    //         email,
    //     });
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};
