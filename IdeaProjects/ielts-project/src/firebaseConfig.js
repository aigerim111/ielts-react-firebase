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
    setDoc,
    query,
    doc,
    getDoc,
    where,
    updateDoc,
    onSnapshot
} from "firebase/firestore";

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
        const userData = await getUserFromDatabase()
        if(!auth.currentUser.emailVerified){
            logout()
            alert("Verify your account!")
        } else{
            if(!userData.isActive){
                const ref = doc(db, "users", auth.currentUser.uid.toString())
                await updateDoc(ref, { isActive: true})
            }
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        let user = auth.currentUser
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            isActive: false
        });
        logout();
        await sendEmailVerification(auth.currentUser)
        alert("Check your email!");
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
        await updateDoc(ref, { name: name})
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
