import React, {useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import AlertContext from '../../context/alerts/alertContext';

const NewAccount = () => {

    // extract value from context
    const alertContext = useContext(AlertContext)
    const {alert, showAlert} = alertContext

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })

    const {name,email,password,confirm} = user;

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        // Validate no empty fields
        if(name.trim()==='' || email.trim()==='' || password.trim()==='' || confirm.trim()===''){
            showAlert('all fields are required', 'alerta-error')
            return;
        }
        // Password 6 characters minimun
        if(password.length < 6){
            showAlert('password minimum 6 charachters', 'alerta-error')
            return;
        }
        // Same 2 passwords
        if(password!==confirm){
            showAlert('password are different', 'alerta-error')
        }
        // Pass to action

    }

    return (
        <div className="form-usuario">
            { alert ? ( <div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null }
            <div className="contenedor-form sombra-dark">
                <h1>Create Account</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input 
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Confirm yout Password"
                            value={confirm}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Register"/>
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Sign In
                </Link>
            </div>
        </div>
    )
}

export default NewAccount
