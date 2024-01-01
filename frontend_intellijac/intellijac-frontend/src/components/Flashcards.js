import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

function Flashcards () {

    // Components to retrieva data from the backend
    const [filledFlashcards, setFilledFlashcards] = useState([]);
    
    useEffect(() => {
        loadFilledFlashcards();
    }, []);

    const loadFilledFlashcards = async () => {
        const result = await axios.get("http://localhost:8080/flashcards/getFlashcards");
        setFilledFlashcards(result.data);
      };

    // Components to send data to the backend
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
        //e.preventDefault();
        await axios.post("http://localhost:8080/flashcards/addFlashcard", flashcard);
    };

    return (
        <div>
            <br></br>
            <br></br>
            <h1>Create your own math flashcards!</h1>
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
                <button type="submit"> Save your flashcard!</button>
            </form>
            <br></br>
            <br></br>
            <h1>Check your math flashcards!</h1>
            <div className="container">
                <div className="py-4">
                <table className="table border shadow">
                    <thead>
                        <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Question</th>
                        <th scope="col">Answer</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filledFlashcards.map((eachFlashcard, index)=>(
                           <tr>
                           <th scope="row" key={index}>{index+1}</th>
                           <td>{eachFlashcard.name}</td>
                           <td>{eachFlashcard.description}</td>
                           <td>
                               Edit
                               Delete
                           </td>
                           </tr>     
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );

}

export default Flashcards;

 
    