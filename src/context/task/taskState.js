import React,{useReducer} from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer'
import axiosClient from '../../components/config/axios';
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
        projectTask: [],
        taskError: false,
        selectedTask: null
    
    }
    
    //Create dispatch and State
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    //Create fucntions
    const getTasks = async project =>{
        try {
            const results = await axiosClient.get('/api/tasks', {params :{project}})
            dispatch({
                type: PROJECT_TASK,
                payload: results.data
            })
        } catch (error) {
            console.log('diego')
        }
        
    }

    const addTask = async task => {
        try {
            const results = await axiosClient.post('/api/tasks', task)
            dispatch({
                type: ADD_TASK,
                payload: task
    
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTask = async (id,project) =>{
        try {
            await axiosClient.delete(`/api/tasks/${id}`,{params:{project}})
            dispatch({
                type: DELETE_TASK,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }

    const validateError = ()=>{
        dispatch({
            type: VALIDATE_TASK
        })
    }
    const setActualState = task =>{
        dispatch({
            type: ACTUAL_TASK,
            payload: task
        })
    }

    const editTask = async task =>{
        
        try {
            const results = await axiosClient.put(`/api/tasks/${task._id}`,task)
            
            console.log(results)
            dispatch({
                type: EDIT_TASK,
                payload: results.data.task
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <TaskContext.Provider
            value={{
                projectTask: state.projectTask,
                taskError: state.taskError,
                selectedTask: state.selectedTask,
                getTasks,
                addTask,
                validateError,
                deleteTask,
                setActualState,
                editTask
                
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState
