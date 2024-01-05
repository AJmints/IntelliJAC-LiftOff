import React from 'react';
import { Link } from 'react-router-dom';


const ContactButton = () => {
  return (
    <div>
        <div style={{ marginRight: "1000px", marginBottom: "50px", marginTop: "50px" }}>
          <Link to="/api/contact" >
            <h2>@ContactUS</h2>
          </Link>
        </div>
      </div>
  );
}

export default ContactButton;