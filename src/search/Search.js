import React from "react";
import axios from "axios";
import { baseUrl } from "../config";
import { useHistory } from "react-router-dom";


export default function Search() {
    const history = useHistory();
    const [search, setSearch] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([])
    const token = localStorage.getItem("user");

    function searchValue(e) {
        setSearch(e.target.value)
        axios.get(baseUrl + "search", { params: { search:e.target.value }, headers: { 'x-access-token': token } })
        .then(res => {
            setSearchResults(res.data)
        })
    }

    return (<div className="container" style={{marginTop:"1rem"}}>
        <input onChange={searchValue} type="search" className="form-control" placeholder="search your friends" />
        <table className="searchtable">
            <tbody>
                {searchResults.map(q => (<tr><td>{q.username}</td></tr>))}
            </tbody>
        </table>
    </div>)
}