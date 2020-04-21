import React, {useReducer} from 'react'
import AuthContext from './authContext';
import authReducer from './authReducer'

import{
    SIGNIN_SUCC,
    SIGNIN_ERROR,
    GET_USER,
    LOGIN_SUCC,
    LOGIN_ERROR,
    LOGOUT
} from '../../types'



const AuthState = props =>{

    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)


    // Functions

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message

            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;