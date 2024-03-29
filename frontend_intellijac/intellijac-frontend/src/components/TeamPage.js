import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Team.css";

const TeamPage = () => {
  return (
<div className="body">
    <h1 className="header">Developer Team</h1>


<div className="team-container">
    <div className="developer-card"  >
        <h2>Charulatha Ravi</h2>
        <h4>Role: Full Stack Developer</h4>
        <p>Email: charu@launchcode.com</p>

        <img className="developer-image" src={require('./images/Charu.png')} alt="Charulatha Ravi" />
    </div>

    <div className="developer-card">
        <h2>Jose Pablo Barragan</h2>
        <h4>Role: Full Stack Developer</h4>
        <p>Email: jp@launchcode.com</p>
<br />
<br />
        <img className="developer-image" src={require('./images/JP.png')} alt="Jose Pablo Barragan" style={{marginBottom: "5px", marginTop: "-5px"}} />
    </div>

    <div className="developer-card">
            <h2>Jialing Liu</h2>
            <h4>Role: Full Stack Developer</h4>
            <p>Email: jialing@launchcode.com</p>

            <img className="developer-image" src={require('./images/Jialing.png')} alt="Jialing Liu" />
        </div>

    <div className="developer-card">
                <h2>Jason</h2>
                <h4>Role: Full Stack Developer</h4>
                <p>Email: jason@launchcode.com</p>

                <img className="developer-image" src={require('./images/Jason.png')} alt="Jason" />
            </div>

</div>
<Link to="/">Go to HomePage</Link>
</div>
 );
}
export default TeamPage;