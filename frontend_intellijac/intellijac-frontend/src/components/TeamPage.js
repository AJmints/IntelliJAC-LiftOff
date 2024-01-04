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
        <p>Role: Full Stack Developer</p>
        <p>Email: charu@launchcode.com</p>

        <img className="developer-image" src={require('./images/Charu.png')} alt="Charulatha Ravi" />
    </div>

    <div className="developer-card">
        <h2>Jose Pablo Barragan</h2>
        <p>Role: Full Stack Developer</p>
        <p>Email: jp@launchcode.com</p>

        <img className="developer-image" src={require('./images/JP.png')} alt="Jose Pablo Barragan" />
    </div>

    <div className="developer-card">
            <h2>Jialing Liu</h2>
            <p>Role: Full Stack Developer</p>
            <p>Email: jialing@launchcode.com</p>

            <img className="developer-image" src={require('./images/Jialing.png')} alt="Jialing Liu" />
        </div>

    <div className="developer-card">
                <h2>Jason</h2>
                <p>Role: Full Stack Developer</p>
                <p>Email: jason@launchcode.com</p>

                <img className="developer-image" src={require('./images/Jason.png')} alt="Jason" />
            </div>

</div>
</div>
 );
}
export default TeamPage;