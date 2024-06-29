import React from 'react'
import BannerImage from '../assets/r.jpg';
import '../styles/About.css'

function About() {
    return (
        <div className="about">
            <div className ="home" style={{ backgroundImage: `url(${BannerImage})`}}></div>
            <div className="aboutBottom">
                <h1>About me</h1>
                <p>My name is Salvatore</p>
            </div>
        </div>
    )
}

export default About