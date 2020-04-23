import React,{useReducer} from 'react'

import projectContext from './projectContext'
import projectReducer from './projectReducer'
import {PROJECT_FORM,

        GET_PROJECTS,
        ADD_PROJECT,
        VALIDATE_FORM,
        ACTUAL_PROJECT,
        DELETE_PROJECT
    }
from '../../types'
import axiosClient from '../../components/config/axios';



const ProjectState = props =>{
   

    const initialSate = {
        form : false,
        projects : [],
        formError: false,
        project: null
    }

    const [state, dispatch] = useReducer(projectReducer,initialSate)


    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        })
    }

    const getProjects = async () =>{
        try {
            const results = await axiosClient.get('/api/projects');

            dispatch({
                type: GET_PROJECTS,
                payload: results.data.projects
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addProject = async project =>{
        try {
            const result = await axiosClient.post('/api/projects', project)
            console.log(result)
            dispatch({
                type: ADD_PROJECT,
                payload: result.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    const selectProject = projectID => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: projectID
        })
    }

    const deleteProject = async projectID =>{
        try {
            await axiosClient.delete(`/api/projects/${projectID}`)
            dispatch({
                type: DELETE_PROJECT,
                payload: projectID
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <projectContext.Provider
            value={{
                form: state.form,
                projects: state.projects,
                formError: state.formError,
                project: state.project,
                deleteProject,
                showError,
                selectProject,
                showForm,
                getProjects,
                addProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState