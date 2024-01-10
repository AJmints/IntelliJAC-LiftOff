import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

function UserComments () {


    //Page display

    return (
        <div>
            <br></br>
            <br></br>
            <h1>Please add comments about the app!</h1>
            <form>
                <div>
                    <label>Your comment:</label>
                </div>
                <div>
                    <input type="text" id="comment-text" name="name" placeholder="Your comment"/>
                </div>
                <button type="submit">Save your comment!</button>
            </form>
        </div>

    );

}

export default UserComments;