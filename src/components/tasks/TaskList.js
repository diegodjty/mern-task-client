import React,{Fragment,useContext} from 'react'
import Task from './Task';
import projectContext from '../../context/projects/projectContext';

const TaskList = () => {

    // Extract projects from initial state
    const projectsContext = useContext(projectContext)
    const {project} = projectsContext;

    // If no projects are selected
    if(!project)return <h2>Select a Project</h2>

    //Array destructoring to extract actual project
    const [actualProject] = project;

    const tasks = [
        {name: 'Choose Platform', status: true},
        {name: 'Choose colors', status: false},
        {name: 'Choose pay method', status: false},
        {name: 'Choose hosting', status: true}
    ]

    return (
        <Fragment>
            <h2>Project: {actualProject.name}</h2>

            <ul className="listado-tareas">
                {tasks.length === 0
                    ? (<li className="tarea"><p>No tasks</p></li>)
                    : tasks.map(task =>(
                        <Task 
                            task={task}
                        />
                    ))
                }
            </ul>

            <button
                type="button"
                className=" btn btn-eliminar"
            >
                Delete Prokect &times;
            </button>
        </Fragment>
    )
}

export default TaskList
