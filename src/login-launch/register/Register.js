import React, { useState } from "react";
import "../LoginLaunch.css";


export default function Register() {
    const [passwordMatch, setPasswordMatch] = React.useState(false);
    const [pwdRegex, setPwdRegex] = React.useState(false);
    const [newpwdDirty, setnewpwdDirty] = React.useState(false);
    const [confpwdDirty, setconfpwdDirty] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState(false)
    const [credentials, setCredentials] = React.useState({
        email: "",
        username: "",
        password: "",
        dob: ""
    });

    function handleCredentials(event) {
        const { name, value } = event.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
        if (name === "password") {
            console.log(value)
            passwordRegex(value);
        }
    };

    function passwordRegex(inputtext) {
        const paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (inputtext.match(paswd)) {
            setPwdRegex(true)
        }
        else {
            setPwdRegex(false)
        }
    }

    function confirmPassword(event) {
        if (event.target.value === credentials.password) {
            setPasswordMatch(true)
        }
        else {
            setPasswordMatch(false)
        }
    };

    function passwordDirty() {
        setnewpwdDirty(true)
    }

    function confirmPwdDirty() {
        setconfpwdDirty(true)
    }

    function authenticate(event) {
        event.preventDefault();
        if (credentials.email.length > 1 && credentials.username.length > 0 && credentials.password.length > 6
            && credentials.dob.length > 0 && pwdRegex && passwordMatch) {
            setSubmitStatus(false);
            console.log(credentials)
        }
        else {
            setSubmitStatus(true);
        }
    }

    return (
        <div className="login-background">
            <div className="col-lg-4 col-sm-3" id="signup-form">
                <form className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={handleCredentials} className="form-control"
                        required={true} autoFocus={true} value={credentials.email} placeholder="Enter email address" />
                    <br></br>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" value={credentials.username} onChange={handleCredentials} className="form-control" placeholder="create username" />
                    <br></br>
                    <label for="new-password">Create password:</label>
                    <input type="password" id={newpwdDirty ? (pwdRegex ? "new-password-correct" : "new-password-incorrect") : null} name="password" value={credentials.password}
                        onFocus={passwordDirty} onChange={handleCredentials} className="form-control" placeholder="create password" />
                    {newpwdDirty ? (pwdRegex ? null : <span>password must be betweeen 7 to 15 characters which contain at least one numeric digit and a special character.</span>) : null}
                    <br></br>
                    <label for="confirm-password">Confirm password:</label>
                    <input type="password" id={confpwdDirty ? (passwordMatch ? "confirm-password-correct" : "confirm-password-incorrect") : null}
                        onFocus={confirmPwdDirty} onChange={confirmPassword} className="form-control" placeholder="confirm password" />
                    <br></br>
                    <label for="dob">Date of birth:</label>
                    <input type="date" id="dob" name="dob" onChange={handleCredentials} value={credentials.dob} className="form-control" />
                    <br></br>
                    <button className="btn btn-primary" onClick={authenticate}>Register</button>
                    {submitStatus ? <span>Please provide apropriate credentials</span> : null}
                </form>
            </div>
        </div>
    )
}