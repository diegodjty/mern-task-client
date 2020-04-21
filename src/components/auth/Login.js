import React, {useState,useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {

    // extract value from context
    const alertContext = useContext(AlertContext)
    const {alert, showAlert} = alertContext

    const authContext = useContext(AuthContext);
    const {singIng,message,authenticated} = authContext;

    // If password or email dont exist

    useEffect(()=>{

        if(authenticated){
            props.history.push('/projects')
        }

        if(message){
            showAlert(message.msg, message.msg.category)
        }

    },[message,authenticated,props.history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const {email,password} = user;

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault()

        // Validate no empty fields
        if(email.trim()===''||password.trim()===''){
            showAlert('all fields are required','alert-error')
        }

        // pass to action
        singIng({email,password})
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Sign In</h1>

                <form
                    onSubmit={onSubmit}
                >
                    { alert ? ( <div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null }
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
                        <input type="submit" className="btn btn-primario btn-block" value="Sign in"/>
                    </div>
                </form>
                <Link to={'/new-account'} className="enlace-cuenta">
                    Create Account
                </Link>
            </div>
        </div>
    )
}

export default Login
