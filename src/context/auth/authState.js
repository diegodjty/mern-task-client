import React, {useReducer} from 'react'
import AuthContext from './authContext';
import authReducer from './authReducer'

import axiosClient from '../../components/config/axios';
import tokenAuth from '../../components/config/token';

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
            console.log(data)
            const response = await axiosClient.post('/api/user', data)
            dispatch({
                type: SIGNIN_SUCC,
                payload: response.data
            })

            // Get user
            authUser()
            
        } catch (error) {

            const alert = {
                msg: error.response.data.msg,
                category: 'alert-error'
            }
            dispatch({
                type: SIGNUP_ERROR,
                payload: alert
            })
        }
    }

    const authUser = async () =>{
        const token = localStorage.getItem('token');

        if(token){
            tokenAuth(token)
        }

        try {
            const response = await axiosClient.get('/api/auth')
            dispatch({
                type: GET_USER,
                payload: response.data.user
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    // When user signin
    const singIng = async data =>{
        try {
            const response = await axiosClient.post('/api/auth', data)
            dispatch({
                type: LOGIN_SUCC,
                payload: response.data
            })  
            // Get user
            authUser()
        } catch (error) {
            console.log(error.response.data.msg)
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alert
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
                registerUser,
                singIng,
                authUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;