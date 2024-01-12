import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

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


//    const onSubmit = async (e) => {
//        await axios.post("http://localhost:8080/comments/add", userComment);
//    };

const onSubmit = async (e) => {
    e.preventDefault();

    try {
        await axios.post("http://localhost:8080/comments/add", userComment);
        alert("Thanks for your comment!");
    } catch (error) {
        console.error("Error submitting comment:", error);

    }
};

    return (
        <div>
            <br></br>
            <br></br>
            <h1>Please tell us about the app!</h1>
            <form onSubmit={(e) => onSubmit(e)}>
                <div>
                    <label> Your name: </label>
                </div>
                <div>
                    <input type="text" id="userComment-name" name="name" onChange={(e) => onInputChange(e)} value={name}/>
                </div>
                <div>
                    <label> Your comment: </label>
                </div>
                <div>
                    <textarea type="text" className="form-control" id="userComment-comment" name="comment" placeholder="What do you think about our app?" rows={"6"} onChange={(e) => onInputChange(e)} value={comment}/>
                </div>
                <button className="btn btn-outline-primary mx-2" type="submit" onClick={() => alert("Thanks for your comment!")}>Save your comment!</button>
            </form>
        </div>

    );

}

export default UserComments;