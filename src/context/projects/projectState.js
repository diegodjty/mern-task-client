import React,{useReducer} from 'react'

import uuid from 'uuid/v4'

import projectContext from './projectContext'
import projectReducer from './projectReducer'
import {PROJECT_FORM, GET_PROJECTS,ADD_PROJECT,VALIDATE_FORM} from '../../types'



const ProjectState = props =>{
    const projects = [
        {id:1, name: 'Virstual store'},
        {id:2, name: 'Physical store'},
        {id:3, name: 'online store'},
    ]

    const initialSate = {
        form : false,
        projects : [],
        formError: false
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
        project.id = uuid()
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

    return (
        <projectContext.Provider
            value={{
                form: state.form,
                projects: state.projects,
                formError: state.formError,
                showError,
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