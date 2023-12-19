import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../styles/Authentication.css";

export default function Buttons(props) {
  return (
    <div className="row">
      <div className="col-md-12 text-center" style={{ position: "fixed", bottom: "210px", left: "100", width: "100%", backgroundColor: "#87CEEB", padding: "2px" }}>
        <div className="btn btn-primary" style={{ display: "inline-block", marginRight: "15px" }}>
          <h1>Here we go!!..</h1>
          {/* Use Link instead of anchor tag for internal navigation */}
          <Link to="/login" className="btn btn-dark" style={{ marginBottom: "30px" }}>
            <h2>Login Here!!</h2>
          </Link>
        </div>
        <h3>#################################</h3>
        <div className="btn btn-primary" style={{ display: "inline-block", marginRight: "15px" }}>
          <h1>Come back later!!</h1>
          <a href="http://localhost:3000" className="btn btn-dark" style={{ marginTop: "60px" }} onClick={props.logout}>
            <h2>Bye-Bye!!</h2>
          </a>
        </div>
      </div>
    </div>
  );
}
