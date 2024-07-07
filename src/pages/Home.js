import React from 'react';
import { Link } from 'react-router-dom'
import bg from '../assets/bg1.PNG';
import '../styles/Home.css'
import Typewriter from '../components/Typewriter';

function Home() {
    return (
        <div className ="home" style={{ backgroundImage: `url(${bg})`}}>
           <div className="headerContainer">
                <h1>
                    <Typewriter texts = {["Salvatore Del Vecchio"]} delay = {100} repeat = {false}/>
                </h1>
                <p>
                    <Typewriter texts = {["Computer Science Student", "Diverse Project Devloper", "Active Github User"]} delay = {100} repeat = {true}/>
                </p>
                <Link to="/about">
                <button>Learn More</button>
                </Link>
           </div>
        </div>
    );
}

export default Home