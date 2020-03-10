import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../LoginLaunch.css";

export default function Login(props) {
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleSignup() {
        history.push("/register")
    }


    return (
        <div className="login-background">
            <div className="col-lg-4 col-sm-3" id="login-form">
                <form className="form-group">
                    <input id="email" className="form-control" type="email" placeholder="Username or email" autoComplete="off" />
                    <br></br>
                    <input id="password" className="form-control" type="password" placeholder="password" />
                    <button className='btn login-button'>Login</button>
                    <button onClick={handleSignup} className='btn signup-button'>signup</button>
                    <hr />
                    Login with google :
                    <button className='btn google-btn'><i class="fa fa-google" aria-hidden="true"></i></button>
                </form>
            </div>
        </div>
    )
}