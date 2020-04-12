import React,{useReducer} from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer'

import {
    PROJECT_TASK
}from '../../types'

const TaskState = (props) => {
    const initialState = {
        task: [
            {name: 'Choose Platform', status: true, projectId: 1},
            {name: 'Choose colors', status: false, projectId: 2},
            {name: 'Choose pay method', status: false, projectId: 3},
            {name: 'Choose hosting', status: true, projectId: 3}
            {name: 'Choose colors', status: false, projectId: 2},
            {name: 'Choose pay method', status: false, projectId: 1},
            {name: 'Choose hosting', status: true, projectId: 4}
            {name: 'Choose colors', status: false, projectId: 1},
            {name: 'Choose pay method', status: false, projectId: 3},
            {name: 'Choose hosting', status: true, projectId: 4}
        ]
    }

    //Create dispatch and State
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    //Create fucntions
    const getTask = proyectId =>{
        dispatch({
            type: PROJECT_TASK,
            payload: proyectId
        })
    }

    return (
        <TaskContext.Provider
            value={{
                task: state.task,
                getTask
                
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState
