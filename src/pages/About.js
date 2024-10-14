import React from 'react'
import BannerImage from '../assets/banner.PNG';
import wmlogo from '../assets/wmlogo.png';
import archery from '../assets/archery.jpg';
import pythonlogo from '../assets/pythonlogo.png'
import javalogo from '../assets/javalogo.png'
import javascriptlogo from '../assets/javascriptlogo.png'
import gitlogo from '../assets/gitlogo.png'
import cpplogo from '../assets/cpplogo.png'
import useSize from '../helpers/useSize';

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

    var windowWidth = useSize()[0];
    const w2 = windowWidth / 3;
    const w3 = windowWidth / 5;


    var windowWidth = useSize()[0];
    const w2 = windowWidth / 3;
    const w3 = windowWidth / 5;

    return (
        <div className="about" style={{height: 2300 - w2}}>
            <div className ="banner" style={{ backgroundImage: `url(${BannerImage})`}}></div>
        <div className="about" style={{height: 2300 - w2}}>
            <div className ="banner" style={{ backgroundImage: `url(${BannerImage})`}}></div>
            <div className="aboutBottom">
                <h1>About Me</h1>

                <div className = "education" style={{width: windowWidth - 50, height: 850 - w2}}>
                <div className = "education" style={{width: windowWidth - 50, height: 850 - w2}}>
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

                <div className = "skills" style={{width: windowWidth - 50}}>
                <div className = "skills" style={{width: windowWidth - 50}}>
                    <div className = "skillsImages">
                        {SkillList.map((sItem, key) => {
                            return (
                            <div className="item" style={{marginRight: -220 + w3}}>
                            <div className="item" style={{marginRight: -220 + w3}}>
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

                <div className = "activities" style={{width: windowWidth - 50, height: 970 - w2}}>
                    <div className="activitiesText">
                        <h2>Activities and Events</h2>
                        <p>Archery:</p>
                        <ul className='secondList'>
                            <li>W&M Archery Club Armorer and Team Captain</li>
                            <li>USA Archery certified level 2 coach</li>
                            <li>Competed at a national level</li>
                        </ul>
                        <p>W&M Game Development Club</p>
                        <p>&hacks William and Mary Hackathon Attendee</p>
                    </div>
                    <img src = {archery}></img>
                </div>

            </div>
        </div>
    )
}

export default About