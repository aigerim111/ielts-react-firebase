import React, { useEffect, useState } from "react";
import {auth, registerWithEmailAndPassword} from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

function RegistrationPage(){

    console.log(auth)
    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    console.log(user)


    function register(){
        registerWithEmailAndPassword(registerName, registerEmail, registerPassword)
        navigate("/")
    }

    return(
        <div className="auth">
            <div className="auth__container">
                <input
                    type="text"
                    className="auth__textBox"
                    value={registerName}
                    onChange={(e) => setRegisterName(e.target.value)}
                    placeholder="Full Name"
                />
                <input
                    type="text"
                    className="auth__textBox"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="auth__textBox"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className="auth__btn" onClick={register}>
                    Register
                </button>

                <div>
                    Already have an account? <Link to="/signin">Login</Link> now.
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage