import React,{Fragment,useState,useContext} from 'react'
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

    const projectsContext = useContext(projectContext)
    const {form, showForm} = projectsContext;
    console.log(form)
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
                onClick={()=>showForm()}
            >
                New Project
            </button>
            {
                form
                ?
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
                :
                    null
            }
        </Fragment>

        
    )
}

export default NewProject