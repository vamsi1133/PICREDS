import React, { useState } from "react";
import "./Login.css";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="login-background">
            <button id="login-button" className="btn">LOGIN</button>
            <button id="signup-button" className="btn">SIGNUP</button>

            {/* <div className="col-lg-4">
                <div className="login-form">
                    <h2 className="login-title">Welcome</h2>
                    <form className="form-group">
                        <label for="email">Email: </label>
                        <input id="email" className="form-control" type="email" placeholder="Enter email" />
                        <label for="password">password: </label>
                        <input id="password" className="form-control" type="password" placeholder="password" />
                    </form>
                </div>
            </div> */}
        </div>
    );
}