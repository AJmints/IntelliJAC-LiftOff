import React from 'react';
import "../styles/Authentication.css";

const Header = () => {
  return (
   <header style={{ background: "#ae5757", height: "150px", borderRadius: "500px", padding: "30px", color: "white", textAlign: "center", margin: "10px auto", width: "60%" }}>
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
