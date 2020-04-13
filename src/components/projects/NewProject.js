import React,{Fragment,useState,useContext} from 'react'
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

    const projectsContext = useContext(projectContext)
    const {form, showForm,addProject,formError,showError} = projectsContext;
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
        if(name === ''){
            showError()
            return;
        }
        // Add to State
        addProject(project)
        // Reset Form
        setProject('')
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
            {formError ? <p className="mensaje error">Project is required</p> :null}
        </Fragment>

        
    )
}

export default NewProject