import React,{useContext} from 'react'
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/task/taskContext';

const Project = ({project}) => {

    // get the function of project context
    const projectsContext = useContext(projectContext)
    const {selectProject} = projectsContext;

    // get the function of task context
    const tasksContext = useContext(taskContext)
    const {getTask} = tasksContext;

    // Function to add actual project
    const actualProject = id =>{
        selectProject(id);
        getTask(id) 
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={()=>{actualProject(project.id)}}
            >
            {project.name}
            </button>
        </li>
    )
}

export default Project
