import React,{useContext,useEffect} from 'react'
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ProjectList = () => {

    const projectsContext = useContext(projectContext)
    const {projects, getProjects} = projectsContext;

    useEffect(() => {
        getProjects()
    }, [])

    if(projects.length === 0) return <p>No projects, Add one first</p>;

    return (
        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project 
                    project={project} 
                    key={project.id}
                />
            ))}
        </ul>
    )
}

export default ProjectList

