import React,{useContext,useState} from 'react'

import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/task/taskContext';

const TaskForm = () => {


    // Extract projects from initial state
    const projectsContext = useContext(projectContext)
    const {project} = projectsContext;

     // get the function of task context
     const tasksContext = useContext(taskContext)
     const {addTask} = tasksContext;

    const [task, setTask] = useState({
        name: '',

    })

    const {name} = task;
    // If no projects are selected
    if(!project)return null;

    // Array destructuring to extract actual project
    const [actualProject] = project;
    
    const handelChange = e =>{
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        // Validate

        // Pass validation

        // add new task to state
        task.projectId = actualProject.id
        task.status = false
        addTask(task)
        // form reset
    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Task Name..."
                        name="name"
                        onChange={handelChange}
                        value={name}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Add Task"
                    />
                </div>
            </form>
        </div>
        
    )
}

export default TaskForm
