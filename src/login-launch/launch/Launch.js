import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../LoginLaunch.css";

function Launch(){
    const history = useHistory();

    function handleLogin(){
        history.push("/login")
    }
    function handleSignup(){
        history.push("/register")
    }
    return (
        <div id="login-buttons" className="login-background">
            <h1 id="welcome">Picreds</h1>
            <button id="login-button" onClick={handleLogin} className="btn">LOGIN</button>
            <button id="signup-button"  onClick={handleSignup} className="btn">SIGNUP</button>
        </div>
    )
}

export default Launch;