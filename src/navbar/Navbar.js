import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";


export default function Navbar() {
    const history = useHistory();

    function getSearch() {
        history.push("/search");
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-transparent navbar-dark">
                <a className="navbar-brand" href="#"><img className="img-fluid" src={require("./navicon.png")}/></a>

              <i className='ml-auto' style={{color:"white"}} onClick={getSearch} class="fa fa-search" aria-hidden="true"> Search</i>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/profile">Profile<span class="sr-only">(current)</span></NavLink>
                        </li>
                    </ul>
                </div>


            </nav>

        </div>
    );
}