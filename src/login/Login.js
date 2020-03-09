import React, { useState } from "react";
import "./Login.css";

export default function Login(props) {
    const [login, setLogin] = useState(false)
    const [signup, setsignup] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleLogin() {
        setLogin(true)
    }

    function handleSignup() {
        setsignup(true)
    }

    function LoginForm() {
        setsignup(false)
        return (
            <div className="col-lg-4 col-sm-3" id="login-blur">
                <div id="login-form">
                    <h2 className="login-title">welcome</h2>
                    <form className="form-group">
                        <input id="email" className="form-control" type="email" placeholder="Username or email" autoComplete="off" />
                        <br></br>
                        <input id="password" className="form-control" type="password" placeholder="password" />
                        <button className='btn'>Login</button>
                    </form>
                </div>
            </div>
        )
    }

    function SignupForm() {
        setLogin(false)
        return (
            <div className="col-lg-4 col-sm-3" id="signup-form">
                <form className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" className="form-control" placeholder="Enter email address" />
                    <br></br>
                    <label for="username">Username:</label>
                    <input type="text" id="username" className="form-control" placeholder="create username" />
                    <br></br>
                    <label for="new-password">Create password:</label>
                    <input type="password" id="new-password" className="form-control" placeholder="create password" />
                    <br></br>
                    <label for="confirm-password">Confirm password:</label>
                    <input type="password" id="confirm-password" className="form-control" placeholder="confirm password" />
                    <br></br>
                    <label for="dob">date of birth:</label>
                    <input type="date" id="dob" className="form-control" />
                    <br></br>
                    <button className="btn-primary">Register</button>
                </form>
            </div>
        )
    }

    function LoginInterface() {
        return (
            <div id="login-buttons">
                <h1 id="welcome">Picreds</h1>
                <button id="login-button" onClick={handleLogin} className="btn">LOGIN</button>
                <button id="signup-button" onClick={handleSignup} className="btn">SIGNUP</button>
            </div>
        )
    }

    return (
        <div className="login-background">
            {(login || signup) ? (login ? <LoginForm /> : <SignupForm />) : <LoginInterface />}
        </div>
    );
}