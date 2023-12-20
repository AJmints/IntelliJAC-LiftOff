import React, {useState} from "react";
import './Rating.css';
import { FaStar } from "react-icons/fa";

function Ratings() {   
      
    // useState with onclick...
    const [rating, setRating] = useState(null)

    const handleclick=(e)=>{
        e.preventDefault()
        const ratings=e.target.value;
        console.log("I clicked the star!");
        fetch("http://localhost:8080/ratings/add", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(ratings)
        }).then(()=>{
            console.log("New rating added.");
        })
    }


    return (
        //<body>
            <div>
                <h1>Please rate our website!</h1>
                {/* mapped over 5 items using an empty array */}
                {/* added iterator i as another argument/parameter to assign each star a number. i+1 b/c arrays starts at 0 and we want 1 to start */}
                {[...Array(5)].map((star, i) => { 

                    const ratingNumber = i + 1;

                    return (
                    <label> 
                        {/* used radio input, so users can "click on stars". Radio input hidden using css  */}
                        {/* onclick... */}
                        <input type="radio" name="rating" value={ratingNumber} onClick={(handleclick) => setRating(ratingNumber)} onChange={(e)=>handleclick(e)}></input> 
                        {/* set colors of stars with ternary operator*/}
                        <FaStar className="star" size={50} color={ratingNumber <= rating ? "#ffa500" : "#808080"}/>
                    </label>
                    );  
                })}
                
                <h4> Your rating is {rating}.</h4>
            </div>

        //</body>     


    );

}

export default Ratings;