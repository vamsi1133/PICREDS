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
            <button id="login-button" onClick={handleLogin} className="btn">L<i class="fa fa-camera" aria-hidden="true"></i>GIN</button>
            <button id="signup-button"  onClick={handleSignup} className="btn">SIGNUP</button>
        </div>
    )
}

export default Launch;