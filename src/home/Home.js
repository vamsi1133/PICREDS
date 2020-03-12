import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


export default function Home(){
    const url="https://picreds.herokuapp.com/"
    const [id,setId]=React.useState("");
    const history = useHistory()

    React.useEffect(()=>{
        const token = sessionStorage.getItem("user");
        axios.get(url+"mytest",{headers: {'x-access-token': token}})
        .then(res=>{
            setId(res.data.username)
        })
        .catch(err=>{
            if(err){
                history.push("/login")
            }
        })
    })
    return(
        <div>
            <h1>welcome</h1>
            <h3>{id}</h3>
        </div>
    )
}