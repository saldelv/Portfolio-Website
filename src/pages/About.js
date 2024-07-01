import React from 'react'
import BannerImage from '../assets/banner.PNG';
import wmlogo from '../assets/wmlogo.png';
import '../styles/About.css'

function About() {
    return (
        <div className="about">
            <div className ="home" style={{ backgroundImage: `url(${BannerImage})`}}></div>
            <div className="aboutBottom">
                <h1>About Me</h1>

                <div className = "education">
                    <div className="educationText">
                        <h2>Education</h2>
                        <ul>
                            <li>Currently a junior enrolled at The College of William & Mary (2022-current)</li>
                            <li>Studying Computer Science</li>
                            <li>Relevent courses include Data Structures, Algorithms, Discrete Structures, <br /> Linear Algebra, Software Development, and more</li>
                        </ul>
                    </div>
                    <img src = {wmlogo}></img>
                </div>

                <div className = "skills">
                    <div className="skillsText">
                        <h2>Skills</h2>
                        <ul>
                            <li>Currently a junior enrolled at The College of William & Mary (2022-current)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About