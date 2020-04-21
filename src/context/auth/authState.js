import React, {useReducer} from 'react'
import AuthContext from './authContext';
import authReducer from './authReducer'

import axiosClient from '../../config/axios';

import{

    SIGNIN_SUCC,
    SIGNUP_ERROR,
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

    const registerUser = async data =>{
        try {

            const response = await axiosClient.post('/api/users', data)
            console.log(response)

            dispatch({
                type: SIGNIN_SUCC
            })
            
        } catch (error) {
            console.log(error)
            dispatch({
                type: SIGNUP_ERROR
            })
        }


    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                registerUser

            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;