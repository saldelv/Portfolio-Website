import React from 'react'
import BannerImage from '../assets/banner.PNG';
import wmlogo from '../assets/wmlogo.png';
import pythonlogo from '../assets/pythonlogo.png'
import javalogo from '../assets/javalogo.png'
import javascriptlogo from '../assets/javascriptlogo.png'
import gitlogo from '../assets/gitlogo.png'
import cpplogo from '../assets/cpplogo.png'

import '../styles/About.css'

const SkillList = [
    {
        name: "Python",
        image: pythonlogo
    },
    {
        name: "Java",
        image: javalogo
    },
    {
        name: "JavaScript",
        image: javascriptlogo
    },
    {
        name: "Git",
        image: gitlogo
    },
    {
        name: "C++",
        image: cpplogo
    }
]
    

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
                            <li>Studying Computer Science</li>
                            <li>Currently a junior enrolled at The College of William & Mary (2022-current)</li>
                            <li>Relevent courses include Data Structures, Algorithms, Discrete Structures, <br /> Linear Algebra, Software Development, and more</li>
                        </ul>
                    </div>
                    <img src = {wmlogo}></img>
                </div>

                <div className = "skills">
                    <div className = "skillsImages">
                        {SkillList.map((sItem, key) => {
                            return (
                            <div className="item">
                                <div className = "hidden">
                                    <p>{sItem.name}</p>
                                </div>
                                <img src = {sItem.image}></img>
                            </div>
                            )
                        })}
                    </div>
                    <div className="skillsText">
                        <h2>Skills</h2>
                        <ul>
                            <li>Python</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Git</li>
                            <li>C++</li>
                            <li>Software Development</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About