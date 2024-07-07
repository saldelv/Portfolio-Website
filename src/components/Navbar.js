import '../styles/Navbar.css'
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/r.jpg';
import ReorderIcon from '@mui/icons-material/Reorder';
import Themes from './themes';

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
                <Themes />
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/contact"> Contact </Link>
                <div className="reorderButton">
                    <button onClick={toggleNavbar}>
                        <ReorderIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar