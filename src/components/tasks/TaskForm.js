import React,{useContext,useState,useEffect} from 'react'

import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/task/taskContext';

const TaskForm = () => {


    // Extract projects from initial state
    const projectsContext = useContext(projectContext)
    const {project} = projectsContext;

     // get the function of task context
     const tasksContext = useContext(taskContext)
     const {addTask,validateError,taskError,getTasks,selectedTask,editTask} = tasksContext;

     useEffect(()=>{
        if(selectedTask !== null){
            setTask(selectedTask)
        }else{
            setTask({
                name: ''
            })
        }
     },[selectedTask])

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

        if(name.trim() === ''){
            validateError() 
            return;
        }

        if(selectedTask === null){
            // add new task to state
            task.project = actualProject._id
            addTask(task)
        }else{
            editTask(task)
        }
        getTasks(actualProject.id);

        // form reset
        setTask({
            name: ''
        })
        
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
                        value={selectedTask !== null ?'Edit Task':'Add Task'}
                    />
                </div>
            </form>

            {taskError? <p className="mensaje error">Name of project is required</p> :null}
        </div>
        
    )
}

export default TaskForm
