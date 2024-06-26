import '../styles/Navbar.css'
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/r.jpg';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <div className="navbar">
            <div className="left" id={openLinks ? "open" : "close"}>
                <h1>
                    Salvatore Del Vecchio
                </h1>
                <div className="hiddenLinks">
                    <Link to="/"> Home </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/projects"> Projects </Link>
                    <Link to="/contact"> Contact </Link>
                </div>
            </div>
            <div className="right">
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/contact"> Contact </Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar