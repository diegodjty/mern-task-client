import React,{Fragment,useState} from 'react'

const NewProject = () => {

    const [project,setProject] = useState({
        name: ''
    });

    const {name} = project
    const onChangeProject =  e =>{
        setProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProject = (e) =>{
        e.preventDefault();

        // Validate project

        // Add to State

        // Reset Form
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >
                New Project
            </button>
            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProject}
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Project Name"
                    name="name"
                    value={name}
                    onChange={onChangeProject}
                />

                <input 
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Add Project"
                />
            </form>
        </Fragment>

        
    )
}

export default NewProject