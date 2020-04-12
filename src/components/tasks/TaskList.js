import React,{Fragment} from 'react'
import Task from './Task';

const TaskList = () => {

    const tasks = [
        {name: 'Choose Platform', status: true},
        {name: 'Choose colors', status: false},
        {name: 'Choose pay method', status: false},
        {name: 'Choose hosting', status: true}
    ]

    return (
        <Fragment>
            <h2>Project: Virtual Store</h2>

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
