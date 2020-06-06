import React from "react";
import $ from "jquery";
import { baseUrl } from "../config";
import axios from "axios";


export default function Profile(){
    const token = localStorage.getItem("user");
    function uploadProfilePicture(){
        const formData = new FormData();
        const profilePic=$("#profilephoto")[0].files[0];
        formData.append("profilepic",profilePic)
        axios.post(baseUrl+"profilepic",formData,{ headers: { 'x-access-token': token },'Content-Type': 'multipart/form-data'})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        console.log(profilePic)
    }
    function ProfilePicture(){
        return(<div>
            <div>
                <img src="https://storage.cloud.google.com/picredprofiles1/icons8-administrator-male-96.png" alt="profile pic"/>
                <input id="profilephoto" type="file"></input>
                <button className="btn" onClick={uploadProfilePicture}>upload</button>
            </div>
        </div>)
    }

    return(<div>
        <ProfilePicture/>
    </div>

    )
    
}