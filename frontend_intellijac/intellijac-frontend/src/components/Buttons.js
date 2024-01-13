import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#87CEEB", borderRadius: "80px", margin: "-10px auto", width: "60%", padding: "10px"}}>
        <div style={{ marginRight: "15px" }}>
          <h1>Here we go!!..</h1>
          <Link to="/api/login" style={{ marginBottom: "50px", textAlign: "center", fontSize: "25px"}}>
            <button
              style={{
                backgroundColor: "#E59866",
                color: "black",
                cursor: "pointer",
                transition: "background-color 0.3s",
                padding: "10px 20px",
                borderRadius: "5px",
                marginLeft: "340px"
              }}
              onMouseOver={() => {document.getElementById('loginButton').style.backgroundColor = '#EEFC5E';}}
              onMouseOut={() => {document.getElementById('loginButton').style.backgroundColor = '#E59866';}}
              id="loginButton"
            >
              Login Here!!
            </button>
          </Link>
        </div>
        <br />
        <h3 style={{textAlign: "center"}}>#################################</h3>
        <br />
        <div style={{ marginRight: "15px", marginTop: "-20px"}}>
          <h1>Come back later!!</h1>
          <Link to="/rating" style={{ marginTop: "60px", textAlign: "center", fontSize: "25px"}}>
            <button
              style={{
                backgroundColor: "#E59866",
                color: "black",
                cursor: "pointer",
                transition: "background-color 0.3s",
                padding: "10px 20px",
                borderRadius: "5px",
                marginLeft: "360px"

              }}
              onMouseOver={() => {document.getElementById('byeButton').style.backgroundColor = '#EEFC5E';}}
              onMouseOut={() => {document.getElementById('byeButton').style.backgroundColor = '#E59866';}}
              id="byeButton"
            >
              Bye-Bye!!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
