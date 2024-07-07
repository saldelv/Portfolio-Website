import React from 'react'
import { ProjectList } from "../helpers/ProjectList.js"
import ProjectItem from '../components/ProjectItem.js'
import '../styles/Projects.css'

function Projects() {
    return (
        <div className="projects">
            <h1 className="projectsTitle">My Projects</h1>
            <div className="projectsList">
                {ProjectList.map((projectsItem, key) => {
                    return ( <ProjectItem 
                    key ={key}
                    image={projectsItem.image} 
                    name={projectsItem.name} 
                    description={projectsItem.description}
                    link={projectsItem.link}/>
                    );
                })}
            </div>
            <a target="_blank" rel="noopener noreferrer" href={`https://github.com/saldelv`}>
                <button>My GitHub</button>
            </a>
        </div>
    )
}

export default Projects