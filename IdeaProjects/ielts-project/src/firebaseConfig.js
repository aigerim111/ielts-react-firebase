import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    sendEmailVerification,
    updateProfile
} from "firebase/auth";
import {
    getFirestore,
    collection,
    setDoc,
    query,
    doc,
    getDoc,
    where,
    updateDoc,
    onSnapshot
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env["REACT_APP_API_KEY"],
    authDomain: process.env["REACT_APP_AUTHDOMAIN "],
    projectId: process.env["REACT_APP_PROJECTID"],
    storageBucket: process.env["REACT_APP_STORAGEBUCKET"],
    messagingSenderId:  process.env["REACT_APP_MESSAGINGSENDERID"],
    appId: process.env["REACT_APP_APPID"]
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        if (!auth.currentUser.emailVerified) {
            logout()
            alert("Verify your account!")
        }
        console.log(await auth.currentUser.getIdToken());
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const update = new Object();
        update.displayName = name;
        getAuth().onAuthStateChanged(user => {
            if (user) {
                updateProfile(user, update);
            }
        })
        logout();
        await sendEmailVerification(auth.currentUser)
        alert("Check your email!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

async function getUserFromDatabase() {
    // const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
    const ref = doc(db, "users", auth.currentUser.uid.toString())
    const docs = await getDoc(ref);

    if (docs.exists()) {
        return docs.data()
    } else {
        return null
    }
}

const updateUserName = async (name) => {
    try {
        console.log(name)
        const ref = doc(db, "users", auth.currentUser.uid.toString())
        await updateDoc(ref, { name: name })
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
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
    getUserFromDatabase,
    updateUserName
};
