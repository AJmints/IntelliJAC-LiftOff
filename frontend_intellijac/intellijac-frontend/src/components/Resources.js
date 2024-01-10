import React, { useState } from "react";
import './Resources.css';
import { Link } from 'react-router-dom';
import { ResourcesList } from './resourceslist';

function Resources (){
// Create code to search inside box

const [query, setQuery] = useState("");


// Display page with imported list of resources from file
return(
    <div className="app">
        <h1>Extra resources</h1>
        <br></br>
        <h3>Search through these resources to learn more about math!</h3>
        <br></br>
        <input type="text" placeholder="Search..." className="search" onChange={(e) => setQuery(e.target.value)}/>
        <br></br>
        <ul className="list">
            {ResourcesList.filter((resource) => resource.name.toLowerCase().includes(query)).map((resource) => (
                <li key={resource.id} className="listItem"><a href={`${resource.url}`}>{resource.name}</a></li>
            ))}
        </ul>
        <br />
        <br />
        <Link to={"/flashcards/addFlashcard"} style={{ marginRight: "700px" }}>
          Go to Flashcards
        </Link>

        <Link to={"/quiz"} style={{ marginRight: "710px" }}>Go to QuizPage</Link>
        <Link to={"/"} style={{ marginRight: "700px" }}>Go to HomePage</Link>
    </div>

)

}

export default Resources;