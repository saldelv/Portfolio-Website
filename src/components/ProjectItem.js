import React from 'react'
import {Link} from 'react-router-dom';

function ProjectItem({image, name, description, link}) {
    return (
        <a target="_blank" rel="noopener noreferrer" href={`${link}`}>
            <span style={{"display": "block"}}>
                <div className="projectsItem">
                    <div style={{ backgroundImage: `url(${image})`}}> </div>
                    <h1> {name} </h1>
                    <p> {description} </p>
                </div>
            </span>
        </a>
    )
}

export default ProjectItem