import React,{useContext} from 'react'
import taskContext from '../../context/task/taskContext';
import projectContext from '../../context/projects/projectContext';

const Task = ({task}) => {

    // get the function of project context
    const projectsContext = useContext(projectContext)
    const {projects} = projectsContext;

    // get the function of task context
    const tasksContext = useContext(taskContext)
    const {deleteTask,getTasks} = tasksContext;

    const taskDelete = id => {
        deleteTask(id)
        getTasks(projects[0].id)
    }

    return (
       
        <li className="tarea sombra"> 
            <p>{task.name}</p>
            <div className="estado">
                {task.status
                    ?
                        (
                            <button
                                type="button"
                                className="completo"
                            >
                                Complete
                            </button>
                        )
                    :
                        (
                            <button
                                type="button"
                                className="incompleto"
                            >
                                Incomplete
                            </button>
                        )
                            
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={()=> taskDelete(task.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    )
}

export default Task
