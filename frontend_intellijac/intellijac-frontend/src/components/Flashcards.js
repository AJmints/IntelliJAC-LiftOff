import React, { useState } from "react";
import FlashcardsService from "./service/Flashcards.service";
import axios from "axios";

function Flashcards () {

    const [flashcard, setFlashcard] = useState({
        name: "",
        description: "",
    }
    )

    const {name, description}=flashcard

    const onInputChange = (e) => {
        setFlashcard({...flashcard, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/flashcards/addFlashcard", flashcard);
    };

    return (
        <div>
            <h1>Create your own math flashcards!</h1>
            <form onSubmit={(e) => onSubmit(e)}> 
                <div>
                <label for="flashcard-name"> Title</label>
                </div>
                <div>
                <input type="text" id="flashcard-name" name="name" placeholder="Your flashcard's title" onChange={(e) => onInputChange(e)} value={name}/>
                </div>
                <div>
                <label for="flashcard-description"> Text</label>
                </div>
                <div>
                <textarea type="text" id="flashcard-description" name="description" placeholder="Your flascard's text" onChange={(e) => onInputChange(e)} value={description}/>
                </div>
                <button type="submit"> Save your flashcard!</button>
            </form>
        </div>
    );

}

export default Flashcards;

 
    