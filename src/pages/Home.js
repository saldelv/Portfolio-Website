import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import close from '../assets/close.png'
import me from '../assets/me.png'
import '../styles/Home.css'
import Typewriter from '../components/Typewriter';

function Home() {

    const [open, setOpen] = useState(false);

    return (
        <div className ="home" id={open ? "open" : "close"}>
           <div className="headerContainer">
                <h1>
                    <Typewriter texts = {["Salvatore Del Vecchio"]} delay = {100} repeat = {false}/>
                </h1>
                <p>
                    I am:&emsp;
                    <Typewriter texts = {["A Computer Science Student", "A Diverse Project Developer", "An Active Github User"]} delay = {100} repeat = {true}/>
                </p>
                <button className="mainButton" onClick={() => setOpen(!open)}>Learn More</button>
                <div className = "menu">
                    <button className="exit" onClick={() => setOpen(!open)}>
                        X
                    </button>
                    <div className = "menuButtons">
                        <Link to="/about"> About </Link>
                        <a>|</a>
                        <Link to="/projects"> Projects </Link>
                        <a>|</a>
                        <Link to="/contact"> Contact </Link>
                    </div>
                </div>
           </div>
           <div className ="homeImage" style={{ backgroundImage: `url(${me})`}}></div>
        </div>
    );
}

export default Home