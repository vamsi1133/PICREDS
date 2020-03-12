import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../LoginLaunch.css";
import axios from "axios";

export default function Login(props) {
    const history = useHistory();
    const url="http://picreds.herokuapp.com/"
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
        console.log(credentials)
        axios.post(url+"authenticate",credentials)
        .then(res=>{
            sessionStorage.setItem("user",res.data.token);
            history.push("/home")
        })
    }

    function handleSignup() {
        history.push("/register")
    }


    return (
        <div className="login-background">
            <div className="col-lg-4 col-sm-3" id="login-form">
                <form className="form-group">
                    <input id="email" className="form-control" type="email" name="username"
                        value={credentials.username} onChange={handleCredentials} required={true} autoFocus={true}
                        placeholder="Username or email" autoComplete="off" />
                    <br></br>
                    <input id="password" className="form-control" type="password" name="password" value={credentials.password}
                        placeholder="password" onChange={handleCredentials} required={true} />
                    <button onClick={handleSubmit} className='btn login-button'>Login</button>
                    <button onClick={handleSignup} className='btn signup-button'>signup</button>
                    <hr />
                    Login with google :
                    <button className='btn google-btn'><i class="fa fa-google" aria-hidden="true"></i></button>
                </form>
            </div>
        </div>
    )
}