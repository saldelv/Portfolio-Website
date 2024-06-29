import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/r.jpg';
import '../styles/Home.css'

function Home() {
    return (
        <div className ="home" style={{ backgroundImage: `url(${Logo})`}}>
           <div className="headerContainer">
                <h1>Salvatore Del Vecchio</h1>
                <p>Computer Science Student</p>
                <Link to="/menu">
                <button>Learn More</button>
                </Link>
           </div>
        </div>
    );
}

export default Home