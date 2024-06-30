import React from 'react'
import {Link} from 'react-router-dom';

function ProjectItem({image, name, description, link}) {
    return (
        <Link to={link}>
        <div className="projectsItem">
            <div style={{ backgroundImage: `url(${image})`}}> </div>
            <h1> {name} </h1>
            <p> {description} </p>
        </div>
        </Link>
    )
}

export default ProjectItem