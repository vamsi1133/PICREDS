import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../../config"

import "../LoginLaunch.css";
import axios from "axios";

export default function Login(props) {
    const history = useHistory();
    const url = baseUrl
    const [errMsg, setErrMsg] = React.useState("")
    const [logClick, setLoginClick] = React.useState(false)
    const [credentials, setCredentials] = React.useState({
        username: "",
        password: ""
    });

    function handleCredentials(event) {
        const { name, value } = event.target
        setCredentials(prev => ({ ...prev, [name]: value }));
    };


    function handleSubmit(event) {
        event.preventDefault();
        setLoginClick(true)
        credentials.username=credentials.username.toLowerCase()
        axios.post(url + "authenticate", credentials)
            .then(res => {
                setLoginClick(false);
                localStorage.setItem("user", res.data.token);
                history.push("/")
            })
            .catch(err => {
                setLoginClick(false)
                if (err.response) {
                    setErrMsg(err.response.data)
                }
            })
    }

    function handleSignup() {
        history.push("/register")
    }


    return (
        <div className="login-background">
            <div className="col-lg-4 col-sm-3" id="login-form">
                {errMsg ? <span>{errMsg}</span> : null}
                <br></br>
                <form className="form-group">
                    <input id="email" className="form-control" type="email" name="username"
                        value={credentials.username} onChange={handleCredentials} required={true} autoFocus={true}
                        placeholder="email or username" autoComplete="off" />
                    <br></br>
                    <input id="password" className="form-control" type="password" name="password" value={credentials.password}
                        placeholder="password" onChange={handleCredentials} required={true} />
                    <button onClick={handleSubmit} className='btn login-button'>{logClick ? <i className="fa fa-spinner fa-spin"></i> : null} Login</button>
                </form>
                <button onClick={handleSignup} className='btn signup-button'>signup</button>
                <hr />
                Login with google :
                <button className='btn google-btn'><i class="fa fa-google" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}