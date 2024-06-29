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
                    <Typewriter text = "Salvatore Del Vecchio" delay = {100}/>
                </h1>
                <p>
                    <Typewriter text = "Computer Science Student" delay = {100}/>
                </p>
                <Link to="/menu">
                <button>Learn More</button>
                </Link>
           </div>
        </div>
    );
}

export default Home