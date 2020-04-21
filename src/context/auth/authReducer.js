import{
    SIGNIN_SUCC,
    SIGNUP_ERROR,
    GET_USER,
    LOGIN_SUCC,
    LOGIN_ERROR,
    LOGOUT
} from '../../types'

export default( state , action) =>{
    switch(action.type){
        case SIGNIN_SUCC:
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                authenticated: true,
                message: null
            }
        case SIGNUP_ERROR:
            return{
                ...state,
                token: null,
                message: action.payload
            }
        default:
            return state;
    }
}