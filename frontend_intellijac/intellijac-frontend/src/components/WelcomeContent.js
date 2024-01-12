import React from 'react';
import "../styles/Authentication.css";

const WelcomeContent = () => {
  return (
    <div className="row justify-content-md-center" style={{padding: "10px"}} >
      <div className="jumbotron" style={{height: "200px",  borderRadius: "300px", margin: "10px auto", width: "60%"}}>
        <div className="container"  style={{height: "100px", marginTop: "30px",  borderRadius: "300px", margin: "10px auto", width: "80%", marginTop: "20px"}}>
          <h1>Welcome!!</h1>
          <h2 style={{padding: "30px", marginTop: "-40px", textAlign: "center"}}>Login to rule the world of quiz!!..</h2>
        </div>
      </div>
    </div>
  );
};

export default WelcomeContent;
