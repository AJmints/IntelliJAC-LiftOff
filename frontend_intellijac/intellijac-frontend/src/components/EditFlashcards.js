import React from "react";
import { Link } from "react-router-dom";

function EditFlashcards() {

    return (
        <div>
            <Link className="btn btn-outline-primary mx-2" to="/flashcards">
            Back to Flashcard list!    
            </Link>
            <br></br>
            Edit Flashcards page
        </div>
    )

}

export default EditFlashcards;