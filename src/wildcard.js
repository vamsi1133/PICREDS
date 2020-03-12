import React from "react";
import { useHistory } from "react-router-dom";

export default function Wildcard() {
    const history=useHistory();
    function takeToHome(){
        history.push("/home");
    }
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div class="error-details">
                            Sorry, an error has occured, Requested page not found!
                </div>
                        <div class="error-actions">
                            <a onClick={takeToHome} class="btn btn-primary btn-lg"><span class="fa fa-home" style={{color:"white"}}> Take to home</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}