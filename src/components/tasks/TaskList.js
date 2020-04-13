import React,{Fragment,useContext} from 'react'
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/task/taskContext';

const TaskList = () => {

    // Extract projects from initial state
    const projectsContext = useContext(projectContext)
    const {project,deleteProject} = projectsContext;

    // get the function of task context
    const tasksContext = useContext(taskContext)
    const {projectTask} = tasksContext;
    // console.log(projectTask)
    // If no projects are selected
    if(!project)return <h2>Select a Project</h2>

    //Array destructoring to extract actual project
    const [actualProject] = project;


    return (
        <Fragment>
            <h2>Project: {actualProject.name}</h2>

            <ul className="listado-tareas">
                {projectTask.length === 0
                    ? (<li className="tarea"><p>No tasks</p></li>)
                    : projectTask.map(task =>(
                        <Task 
                            task={task}
                        />
                    ))
                }
            </ul>

            <button
                type="button"
                className=" btn btn-eliminar"
                onClick={ ()=>{deleteProject(actualProject.id)}}
            >
                Delete Prokect &times;
            </button>
        </Fragment>
    )
}

export default TaskList
