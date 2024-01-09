import React, { useState } from "react";
import "../styles/QuizPage.css";

function ChangeStyles (){
    
    const [style, setStyle] = useState("light");
    
    // const changeBackground = () => {
    //     if (style !== "light") setStyle("light");
    //     else setStyle("dark");
    // }
    const darkBackground = () => {
        setStyle("dark");
    }

    return (
        <div className="App">
            <h1 className="geeks">Change the background of the page</h1>
            <h3 className={style}>
                Click button to change background
            </h3>
            <button
                className="button"
                onClick={darkBackground}
            >
                Click me!
            </button>
        </div>
    );
}

export default ChangeStyles;