import React from 'react';
import "../styles/Authentication.css";

const Header = () => {
  return (
   <header className="App-header" style={{ background: "#ae5757", height: "200px", borderRadius: "500px", padding: "20px", color: "black", textAlign: "center", margin: "10px auto", width: "60%" }}>
      <img
        src="https://apptraitsolutions.com/wp-content/uploads/2021/01/C88IZyEo7g-1.jpg"
        className="App-logo"
        alt="logo"
      />
      <h1 style={{padding: "30px"}}>IntelliJAC QUIZ</h1>
    </header>
  );
};

export default Header;
