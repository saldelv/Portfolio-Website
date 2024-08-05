import React from 'react'
import BannerImage from '../assets/banner.PNG';
import wmlogo from '../assets/wmlogo.png';
import archery from '../assets/archery.jpg';
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
                    </div>
                </div>

                <div className = "activities">
                    <div className="activitiesText">
                        <h2>Activities</h2>
                        <ul>
                            <li>Archery:</li>
                            <ul className='secondList'>
                                <li>W&M Archery Club Armorer and Team Captain</li>
                                <li>USA Archery certified level 2 coach</li>
                                <li>Competed at a national level</li>
                            </ul>
                        </ul>
                    </div>
                    <img src = {archery}></img>
                </div>

            </div>
        </div>
    )
}

export default About