import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../config";
import Navbar from '../navbar/Navbar'


export default function Home() {
    const url = baseUrl
    const token = localStorage.getItem("user");
    const [myId, setMyId] = React.useState("");
    const history = useHistory();
    const [isLogged, setIsLogged] = React.useState(false);
    const [checkUsername, setCheckUsername] = React.useState(true)
    const [userId, setUserId] = React.useState("")
    const [usernameError, setUsernameError] = React.useState("")

    React.useEffect(() => {
        axios.get(url + "auth", { headers: { 'x-access-token': token } })
            .then(res => {
                if (res.data.username) {
                    setMyId(res.data.username)
                    setUserId(res.data._id)
                    setIsLogged(true);
                }
                else {
                    setUserId(res.data._id)
                    setCheckUsername(false);
                }
            })
            .catch(err => {
                if (err) {
                    history.push("/login");
                }
            })
    })

    function setUsername(event) {
        event.preventDefault()
        let username = document.querySelector('#setusername').value.replace(/[^A-Z0-9]+/ig, '').toLowerCase();
        let dob = document.querySelector('#getdob').value;
        if (dob && username) {
            axios.post(url + "setusername", { _id: userId, username: username, dob: dob }, { headers: { 'x-access-token': token } })
                .then(res => { setCheckUsername(true) })
                .catch(err => {
                    if (err.response) {
                        setUsernameError(err.response.data)
                    }
                });
        }
        else {
            alert("enter all credentials")
        }
    };

    if (!checkUsername) {
        return (<div style={{ marginTop: "5rem" }} className="container-fluid">
            <h5>Please enter username to continue.</h5>
            <form>
                <label for="setusername">username</label>
                <input type="text" id="setusername" placeholder="username" className="form-control" />
                <br></br>
                <label for="getdob">Date of birth</label>
                <input type="date" id="getdob" placeholder="dob" className="form-control" />
                <br></br>
                <button onClick={setUsername} className="btn  btn-info">submit</button>
            </form>
            {usernameError ? <span className="text-danger">{usernameError}</span> : null}
        </div>)
    }
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <span>Hi! {myId}</span>
            </div>
        </div>
    )
}