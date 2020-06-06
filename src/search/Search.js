import React from "react";
import axios from "axios";
import { baseUrl } from "../config";
import { useHistory } from "react-router-dom";
import "./Search.css"


export default function Search() {
    const history = useHistory();
    const [searchResults, setSearchResults] = React.useState([])
    const token = localStorage.getItem("user");

    function searchValue(e) {
        axios.get(baseUrl + "search", { params: { search: e.target.value }, headers: { 'x-access-token': token } })
            .then(res => {
                setSearchResults(res.data)
            })
            .catch(err=>{
                if(err.response){
                    if(err.response.status===401){
                        history.push("/login")
                    }
                }
            })
    }

    return (<div className="container" style={{ marginTop: "1rem" }}>
        <input onChange={searchValue} autoFocus={true} type="search" className="form-control" placeholder="search your friends" />
        <div className="searchtable">
            <table>
                <tbody >
                    {searchResults.map(q => (<tr><td>{q.username}</td></tr>))}
                </tbody>
            </table>
        </div>
    </div>)
}