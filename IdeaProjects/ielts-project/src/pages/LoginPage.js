import React, { useEffect, useState } from "react";
import {auth, logInWithEmailAndPassword } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

function LoginPage(){

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    function login(){
        logInWithEmailAndPassword(loginEmail, loginPassword);
        navigate("/")
    }

    return(
        <div className="auth">
            <div className="auth__container">
                <input
                    type="text"
                    className="auth__textBox"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="auth__textBox"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className="auth__btn" onClick={login}>
                    Login
                </button>

                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
}

export default LoginPage