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
            <h1>Please tell us about the app!</h1>
            <form>
                <div>
                    <label> Your comment: </label>
                </div>
                <div>                    
                    <textarea className="form-control" id="comment-text" name="name" placeholder="What do you think about our app?" rows={"6"}/>
                </div>
                <button className="btn btn-outline-primary mx-2" type="submit">Save your comment!</button>
            </form>
        </div>

    );

}

export default UserComments;