import React,{useReducer} from 'react'

import { v4 as uuidv4 } from 'uuid';

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



const ProjectState = props =>{
    const projects = [
        {id:1, name: 'Virstual store'},
        {id:2, name: 'Physical store'},
        {id:3, name: 'online store'},
    ]

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

    const getProjects = () =>{
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    const addProject = project =>{
        project.id = uuidv4()
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
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

    const deleteProject = projectID =>{
        dispatch({
            type: DELETE_PROJECT,
            payload: projectID
        })
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