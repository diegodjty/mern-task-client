import React,{useReducer} from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer'
import { v4 as uuidv4 } from 'uuid';


import {

    PROJECT_TASK,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    TASK_STATUS,
    ACTUAL_TASK,
    EDIT_TASK
}from '../../types'

const TaskState = (props) => {
    const initialState = {
        projectTask: null,
        taskError: false,
        selectedTask: null,
        tasks: [
            {id: 1,name: 'Choose Platform', status: true, projectId: 1},
            {id: 2,name: 'Choose colors', status: false, projectId: 2},
            {id: 3,name: 'Choose pay method', status: false, projectId: 3},
            {id: 4,name: 'Choose hosting', status: true, projectId: 3},
            {id: 5,name: 'Choose colors', status: false, projectId: 2},
            {id: 6,name: 'Choose pay method', status: false, projectId: 1},
            {id: 7,name: 'Choose hosting', status: true, projectId: 4},
            {id: 8,name: 'Choose colors', status: false, projectId: 1},
            {id: 9,name: 'Choose pay method', status: false, projectId: 3},
            {id: 10,name: 'Choose hosting', status: true, projectId: 4}
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
        task.id = uuidv4()
        dispatch({
            type: ADD_TASK,
            payload: task

        })
    }

    const deleteTask = id =>{
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    const validateError = ()=>{
        dispatch({
            type: VALIDATE_TASK
        })
    }

    const changeStatus = task =>{
        dispatch({
            type: TASK_STATUS,
            payload: task
        })
    }

    const setActualState = task =>{
        dispatch({
            type: ACTUAL_TASK,
            payload: task
        })
    }

    const editTask = task =>{
        dispatch({
            type: EDIT_TASK,
            payload: task
        })
    }
    
    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTask: state.projectTask,
                taskError: state.taskError,
                selectedTask: state.selectedTask,
                getTasks,
                addTask,
                validateError,
                deleteTask,
                changeStatus,
                setActualState,
                editTask
                
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState
