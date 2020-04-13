import React,{useReducer} from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer'

import {
    PROJECT_TASK,
    ADD_TASK,
    VALIDATE_TASK
}from '../../types'

const TaskState = (props) => {
    const initialState = {
        projectTask: null,
        taskError: false,
        tasks: [
            {name: 'Choose Platform', status: true, projectId: 1},
            {name: 'Choose colors', status: false, projectId: 2},
            {name: 'Choose pay method', status: false, projectId: 3},
            {name: 'Choose hosting', status: true, projectId: 3},
            {name: 'Choose colors', status: false, projectId: 2},
            {name: 'Choose pay method', status: false, projectId: 1},
            {name: 'Choose hosting', status: true, projectId: 4},
            {name: 'Choose colors', status: false, projectId: 1},
            {name: 'Choose pay method', status: false, projectId: 3},
            {name: 'Choose hosting', status: true, projectId: 4}
        ]
    }
    
    //Create dispatch and State
    const [state, dispatch] = useReducer(TaskReducer, initialState);
    //Create fucntions
    const getTasks = projectId =>{
        dispatch({
            type: PROJECT_TASK,
            payload: projectId
        })
        
    }

    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task

        })
    }

    const validateError = ()=>{
        dispatch({
            type: VALIDATE_TASK
        })
    }
    
    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTask: state.projectTask,
                taskError: state.taskError,
                getTasks,
                addTask,
                validateError
                
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState
