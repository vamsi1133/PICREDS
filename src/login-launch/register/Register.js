import React, { useState } from "react";
import "../LoginLaunch.css";


export default function Register() {
    return (
        <div className="login-background">
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
        </div>
    )
}