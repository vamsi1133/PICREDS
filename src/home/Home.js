import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../config";
import Launch from "../login-launch/launch/Launch";


export default function Home() {
    const url = baseUrl
    const [id, setId] = React.useState("");
    const history = useHistory()
    const [isLogged, setIsLogged] = React.useState(false);

    React.useEffect(() => {
        const token = localStorage.getItem("user");
        axios.get(url + "auth", { headers: { 'x-access-token': token } })
            .then(res => {
                setId(res.data.email)
                setIsLogged(true);
            })
            .catch(err => {
                if (err) {
                    history.push("/login");
                }
            })
    })
    return (
        <div>
            <h1>welcome</h1>
            <h3>{id}</h3>
        </div>
    )
}