import React from 'react';
import { Link } from 'react-router-dom';
//import "../styles/Authentication.css";

const Buttons = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#87CEEB", borderRadius: "80px", margin: "-10px auto", width: "60%", padding: "10px"}}>
        <div style={{ marginRight: "15px" }}>
          <h1>Here we go!!..</h1>

          <Link to="/api/login" style={{ marginBottom: "50px", textAlign: "center"}}>
            <h2>Login Here!!</h2>
          </Link>
        </div>
        <br />
        <h3 style={{textAlign: "center"}}>#################################</h3>
        <br />
        <div style={{ marginRight: "15px", marginTop: "-20px"}}>
          <h1>Come back later!!</h1>
          <Link to="/" style={{ marginTop: "60px", textAlign: "center"}}>
            <h2>Bye-Bye!!</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
