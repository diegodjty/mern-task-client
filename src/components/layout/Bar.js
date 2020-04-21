import React,{useContext,useEffect} from 'react'
import AuthContext from '../../context/auth/authContext';

const Bar = () => {

     // Extrac auth info
     const authContext = useContext(AuthContext)
     const {authUser, user,logOut} =authContext;
 
     useEffect(()=>{
         authUser()
     },[])
    return (
        <header className="app-header">
            {user ?<p className="nombre-usuario">Hi <span>{user.name}</span></p> :null}
            <nav className="nav-principal">
                <button
                    className="btn btn-blank close-sesion"
                    onClick={()=>logOut()}
                >
                    Sign out
                </button>
            </nav>
        </header>
    )
}

export default Bar
