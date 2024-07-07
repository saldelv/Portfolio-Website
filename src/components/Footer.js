import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className ="footer">
            <div className ="socialMedia">
                <a target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/in/saldelv/`}>
                    <LinkedInIcon /> 
                </a>
                <a target="_blank" rel="noopener noreferrer" href={`https://github.com/saldelv`}>
                    <GitHubIcon /> 
                </a>
            </div>
            <p> &copy; 2024 Salvatore Del Vecchio</p>
        </div>
    );
}

export default Footer