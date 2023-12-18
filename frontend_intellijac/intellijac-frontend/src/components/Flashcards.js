import React, { useState } from "react";
import FlashcardsService from "./service/Flashcards.service";

function Flashcards () {

    const [flashcard, setFlashcard] = useState({
        name: "",
        description: "",
    }
    )

    const [msg, setMsg] = useState("")

    const handleChange = (e) => {
        const value = e.target.value;
        setFlashcard({...flashcard, [e.target.name]: value})
    }

    const saveFlashcard = (e) => {
        e.preventDefault();
        console.log(flashcard);
        flashcardService.saveFlashcard(flashcard)
            .then((res) => {
                console.log("Flashcard added succesully");
                setMsg("Flashcard added succesully");
                setFlashcard({
                    name: "",
                    description: "",
                })
            }).catch((error) => {
                console.log(error);
            });
    }

    //const webUrl = "http://localhost:8080/"
    
    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const data = {
    //         name: String(event.target.name.value),
    //         description: String(event.target.description.value)  
    //     }
        
    //     console.log(data);
        
    // }    

    return (
        <div>
            <h1>Create your own math flashcards!</h1>
            <form onSubmit={(e) => saveFlashcard(e)}> 
                <div>
                <label for="flashcard-name"> Title</label>
                </div>
                <div>
                <input type="text" id="flashcard-name" name="name" placeholder="Your flashcard's title" onChange={(e) => handleChange(e)} value={flashcard.name}/>
                </div>
                <div>
                <label for="flashcard-description"> Text</label>
                </div>
                <div>
                <textarea type="text" id="flashcard-description" name="description" placeholder="Your flascard's text" onChange={(e) => handleChange(e)} value={flashcard.d}/>
                </div>
                <button type="submit"> Save your flashcard!</button>
            </form>
        </div>
    );

}

export default Flashcards;