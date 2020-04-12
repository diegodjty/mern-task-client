import React,{useReducer} from 'react'

import projectContext from './projectContext'
import projectReducer from './projectReducer'
import {PROJECT_FORM} from '../../types'

const ProjectState = props =>{
    const initialSate = {
        form : false
    }

    const [state, dispatch] = useReducer(projectReducer,initialSate)


    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        })
    }

    return (
        <projectContext.Provider
            value={{
                form: state.form,
                showForm
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState