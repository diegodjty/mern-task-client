import React,{useContext,useEffect} from 'react'
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const ProjectList = () => {

    const projectsContext = useContext(projectContext)
    const {projects, getProjects} = projectsContext;

    useEffect(() => {
        getProjects()
        //eslint-disable-next-line
    },[])

    if(projects.length === 0) return <p>No projects, Add one first</p>;

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
            {projects.map(project => (
                <CSSTransition
                    key={project._id}
                    timeout={200}
                    classNames="proyecto"
                >
                    <Project 
                        project={project} 
                        
                    />
                </CSSTransition>
            ))}
            </TransitionGroup>
        </ul>
    )
}

export default ProjectList

