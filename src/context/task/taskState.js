import React,{useReducer} from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer'

import {
    PROJECT_TASK
}from '../../types'

const TaskState = (props) => {
    const initialState = {
        projectTask: null,
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
    const getTask = projectId =>{
        dispatch({
            type: PROJECT_TASK,
            payload: projectId
        })
        
    }
    
    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTask: state.projectTask,
                getTask
                
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState
