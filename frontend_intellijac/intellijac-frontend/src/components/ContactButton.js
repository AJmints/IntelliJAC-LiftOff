import React from 'react';
import { Link } from 'react-router-dom';


const ContactButton = () => {
  return (
    <div>
        <div style={{ marginRight: "1000px", marginBottom: "80px", marginTop: "50px", marginLeft: "300px" }}>
          <Link to="/api/contact" >
            <h2>@ContactUS</h2>
          </Link>
        </div>
      </div>
  );
}

export default ContactButton;