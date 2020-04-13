import {
    PROJECT_TASK
}from '../../types'

export default (state, action) => {
    switch (action.type) {
        case PROJECT_TASK :

            return{
                ...state,
                projectTask: state.tasks.filter(task => task.projectId === action.payload)
                
            }
        default:
            return state;
            
    }
}