import React from 'react';
import { Link } from 'react-router-dom';


const ContactButton = () => {
  return (
    <div>
        <div style={{ marginLeft: "1000px", marginBottom: "100px", marginTop: "-120px", marginRight: "20px" }}>
          <Link to="/api/team" >
            <h2>Meet Our Team!!</h2>
          </Link>
        </div>
      </div>
  );
}

export default ContactButton;