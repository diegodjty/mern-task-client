import React from 'react'
import Project from './Project';

const ProjectList = () => {

    const projects = [
        {name: 'Virstual store'},
        {name: 'Virstual store'},
        {name: 'Virstual store'},
    ]

    return (
        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project project={project} />
            ))}
        </ul>
    )
}

export default ProjectList

