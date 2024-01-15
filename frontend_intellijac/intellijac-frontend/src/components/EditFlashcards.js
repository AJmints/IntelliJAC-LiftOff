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

    const onSubmit = async (e) => {
        
        await axios.put(`http://localhost:8080/flashcards/flashcard/${id}`, flashcard);
    };

    const loadFlashcard = async ()=>{
        const result=await axios.get(`http://localhost:8080/flashcards/flashcard/${id}`)
        setFlashcard(result.data)
    }

    return (
        <div style={{backgroundColor:"#FFF5EE"}}>
            <br></br>
            <br></br>
            <h1 style={{color:"#008B8B"}}><b>Edit your math flashcards here!</b></h1>
            <form onSubmit={(e) => onSubmit(e)}> 
                <div style={{fontSize: "25px", marginLeft:"40px", marginRight:"40px"}}>
                <label for="flashcard-name"><b> Your question</b></label>
                </div>
                <div style={{marginLeft:"40px", marginRight:"40px"}}>
                <input type="text" id="flashcard-name" name="name" placeholder="Your flashcard's title" onChange={(e) => onInputChange(e)} value={name}/>
                </div>
                <br></br>
                <div style={{fontSize: "25px", marginLeft:"40px", marginRight:"40px"}}>
                <label for="flashcard-description"><b> Your answer </b></label>
                </div>
                <div style={{marginLeft:"40px", marginRight:"40px"}}>
                <textarea type="text" className="form-control" id="flashcard-description" name="description" placeholder="Your flascard's text" onChange={(e) => onInputChange(e)} value={description}/>
                </div>
                <div style={{marginLeft:"40px", marginRight:"40px"}}>
                <br></br>
                <button className="btn btn-outline-primary mx-2" type="submit"><b> Edit your flashcard! </b></button>
                </div>
            </form>
            <br></br>
            <div>
            <Link className="btn btn-outline-primary mx-2" style={{backgroundColor: "#CD5C5C"}} to="/flashcards">
              <b style={{color:"white"}}>Back to Flashcard list!</b>
              </Link>
              </div>
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