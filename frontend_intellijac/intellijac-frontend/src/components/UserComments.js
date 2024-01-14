import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

function UserComments () {

    //Sending comments to the backend

    const [userComment, setUserComment] = useState({
        name: "",
        comment: "",
    })

    const {name, comment} = userComment
    

    const onInputChange = (e) => {
        setUserComment({...userComment, [e.target.name]: e.target.value});
    };


    const onSubmit = async (e) => {
        await axios.post("http://localhost:8080/comments/add", userComment);
    };    

    return (
        <div style={{backgroundColor:"#FFF5EE"}}>
            <br></br>
            <br></br>
            <h1 style={{color:"#008B8B"}}><b>Please tell us about the app!</b></h1>
            <form onSubmit={(e) => onSubmit(e)}>
                <div>
                    <label style={{fontSize: "25px", marginLeft:"40px", marginRight:"40px"}}><b> Your name: </b></label>
                </div>
                <div style={{marginLeft:"40px", marginRight:"40px"}}>
                    <input type="text" id="userComment-name" name="name" onChange={(e) => onInputChange(e)} value={name}/>
                </div>
                <div>
                    <br></br>
                    <label style={{fontSize: "25px", marginLeft:"40px", marginRight:"40px"}}><b> Your comment: </b></label>
                </div>
                <div style={{marginLeft:"40px", marginRight:"40px"}}>                    
                    <textarea type="text" className="form-control" id="userComment-comment" name="comment" placeholder="What do you think about our app?" rows={"6"} onChange={(e) => onInputChange(e)} value={comment}/>
                </div>
                <br></br>
                <div style={{marginLeft:"40px", marginRight:"40px"}}>
                <button className="btn btn-outline-primary mx-2" style={{backgroundColor: "#CD5C5C"}} type="submit" onClick={() => alert("Thanks for your comment!")}><b style={{color:"white"}}>Save your comment!</b></button>
                <Link to="/"><b>Go to HomePage</b></Link>
                </div>
            </form>
            <br></br>
            
        </div>

    );

}

export default UserComments;