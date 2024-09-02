import React from 'react';
import './Aboutus.css'; // Import external CSS file

const AboutUs = () => {
    return (
        <div>
            <div className="about"><h1>About Us</h1></div>
            <div className="team">
                <div className="team-member">
                    <img src="person1.jpg" alt="Person 1" />
                    <h2>AYUSH AGARWALA</h2>
                    <p>FRONTEND DEVELOPER</p>
                </div>
                <div className="team-member">
                    <img src="person2.jpg" alt="Person 2" />
                    <h2>AMAN HOSSAIN</h2>
                    <p>BACKEND DEVELOPER</p>
                </div>
                <div className="team-member">
                    <img src="ris.jpeg" alt="RISHAV GHATAK" />
                    <h2>RISHAV GHATAK</h2>
                    <p>DATA-SCIENCE & ML DEVELOPER</p>
                    <p>email: rishavghatak@gmail.com</p>
                </div>
                <div className="team-member">
                    <img src="person4.jpg" alt="Person 4" />
                    <h2>AYUSH DUTTA</h2>
                    <p>DEPLOYMENT ENGINEER</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
