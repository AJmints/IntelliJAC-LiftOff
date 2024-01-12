import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function EditFlashcards() {

    const {id}=useParams()
    
    const [flashcard, setFlashcard] = useState({
        name: "",
        description: "",
    }
    )

    const {name, description}=flashcard

    const onInputChange = (e) => {
        setFlashcard({...flashcard, [e.target.name]: e.target.value});
    };

    useEffect(()=>{
        loadFlashcard()
    }, []);

//    const onSubmit = async (e) => {
//
//        await axios.put(`http://localhost:8080/flashcards/flashcard/${id}`, flashcard);
//    };

const onSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.put(`http://localhost:8080/flashcards/flashcard/${id}`, flashcard);
        // Add a log or handle success if needed
        console.log("Flashcard updated successfully");
    } catch (error) {
        console.error("Error updating flashcard:", error);
        // Handle the error if needed
    }
};


    const loadFlashcard = async ()=>{
        const result=await axios.get(`http://localhost:8080/flashcards/flashcard/${id}`)
        setFlashcard(result.data)
    }

    return (
        <div>
            <br></br>
            <br></br>
            <h1>Edit your math flashcards here</h1>
            <form onSubmit={(e) => onSubmit(e)}> 
                <div>
                <label for="flashcard-name"> Your question</label>
                </div>
                <div>
                <input type="text" id="flashcard-name" name="name" placeholder="Your flashcard's title" onChange={(e) => onInputChange(e)} value={name}/>
                </div>
                <div>
                <label for="flashcard-description"> Your answer</label>
                </div>
                <div>
                <textarea type="text" id="flashcard-description" name="description" placeholder="Your flascard's text" onChange={(e) => onInputChange(e)} value={description}/>
                </div>
                <button type="submit"> Edit your flashcard!</button>
            </form>
            <Link className="btn btn-outline-primary mx-2" to="/flashcards">
              Back to Flashcard list!    
              </Link>
        </div>

    // {/* // return (
    // //     <div>
    // //         <Link className="btn btn-outline-primary mx-2" to="/flashcards">
    // //         Back to Flashcard list!    
    // //         </Link>
    // //         <br></br>
    // //         Edit Flashcards page
    // //     </div>
    // // ) */}
    
    );
}

export default EditFlashcards;