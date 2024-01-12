import React, { useState } from "react";
import './Resources.css';
import { Link } from 'react-router-dom';
import { ResourcesList } from './resourceslist';

function Resources (){
// Create code to search inside box

const [query, setQuery] = useState("");


// Display page with imported list of resources from file
return(
    <div style= {{ backgroundColor: "#EFBC65"}}>
        <h1 style= {{ fontSize: "50px", marginLeft: "80px", color: "red"}}><u>Resources</u></h1>
        <br />

        <p style= {{ fontSize: "30px", marginLeft: "470px"}}>Here are few resources to learn more on math!!</p>
        <br></br>
        <input type="text" placeholder="Search..." className="search" style= {{marginLeft: "670px", textAlign: "center"}} onChange={(e) => setQuery(e.target.value)}/>
        <br></br>
        <br />

        <ul className="list" style= {{marginLeft: "100px"}}>
            {ResourcesList.filter((resource) => resource.name.toLowerCase().includes(query)).map((resource) => (
                <li key={resource.id} className="listItem"><a href={`${resource.url}`}>{resource.name}</a></li>
            ))}
        </ul>
        <br />
        <br />
        <Link to={"/flashcards/addFlashcard"} style={{ marginRight: "700px", color: "#5BA4BB" }}>
          Go to Flashcards
        </Link>
        <br />

        <Link to={"/quiz"} style={{ marginRight: "500px", color: "#5BA4BB" }}>Go to QuizPage</Link>
<br />
        <Link to={"/"} style={{ marginRight: "700px", color: "#5BA4BB" }}>Go to HomePage</Link>
    </div>

)

}

export default Resources;