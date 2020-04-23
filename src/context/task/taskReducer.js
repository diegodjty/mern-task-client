import {
    PROJECT_TASK,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    TASK_STATUS,
    ACTUAL_TASK,
    EDIT_TASK
}from '../../types'

export default (state, action) => {
    switch (action.type) {
        case PROJECT_TASK :
            return{
                ...state,
                projectTask: action.payload
            }
        case ADD_TASK :
            return{
                ...state,
                projectTask: [action.payload,...state.projectTask],
                taskError: false
            }
        case VALIDATE_TASK :
            return{
                ...state,
                taskError: true,

            }
        case DELETE_TASK:
            return{
                ...state,
                projectTask: state.projectTask.filter(task => task._id !== action.payload)
            }
        case TASK_STATUS:
        case EDIT_TASK:
            return{
                ...state,
                projectTask: state.projectTask.map(task => task.id === action.payload.id ? action.payload:task),
                selectedTask : null

            }
        case ACTUAL_TASK:
            return{
                ...state,
                selectedTask: action.payload
            }
        default:
            return state;
            
    }
}