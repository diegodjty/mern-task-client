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
        case LOGIN_SUCC:
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                authenticated: true,
                message: null,
                loading: false
            }
        case LOGOUT:
        case LOGIN_ERROR:
        case SIGNUP_ERROR:
            localStorage.removeItem('token')
        return{
            ...state,
            token: null,
            message: action.payload,
            authenticated: null,
            loading: false
        }
        case GET_USER:
            return{
                ...state,
                user: action.payload,
                authenticated: true,
                loading: false
            }
        default:
            return state;
    }
}