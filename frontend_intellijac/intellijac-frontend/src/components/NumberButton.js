import React from 'react';
import { useNavigate } from 'react-router-dom';

const NumberButton = () => {
  const navigate = useNavigate();

  const redirectToNumberOfDay = () => {
    navigate('/numberoftheday');
  };

  return (
    <div>
      <div style={{ marginLeft: "580px", marginTop: "-80px", marginBottom: "50px", marginRight: "20px" }}>
        <button style={{backgroundColor: "#954535", color: "black", fontSize: "30px", cursor: "pointer", transition: "background-color 0.3s" }}
        onClick={redirectToNumberOfDay}

                  onMouseOver={() => {document.getElementById('numberButton').style.backgroundColor = '#F1C40F';}}
                  onMouseOut={() => {document.getElementById('numberButton').style.backgroundColor = '#954535';}}
                  id="numberButton">
          ##Number Of The Day##
        </button>
      </div>
    </div>
  );
}

export default NumberButton;
