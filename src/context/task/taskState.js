import React,{useReducer} from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer'

const TaskState = (props) => {
    const initialState = {
        task: [
            {name: 'Choose Platform', status: true, projectId: 1},
            {name: 'Choose colors', status: false, projectId: 2},
            {name: 'Choose pay method', status: false, projectId: 3},
            {name: 'Choose hosting', status: true, projectId: 3}
            {name: 'Choose colors', status: false, projectId: 2},
            {name: 'Choose pay method', status: false, projectId: 1},
            {name: 'Choose hosting', status: true, projectId: 4}
            {name: 'Choose colors', status: false, projectId: 1},
            {name: 'Choose pay method', status: false, projectId: 3},
            {name: 'Choose hosting', status: true, projectId: 4}
        ]
    }

    //Create dispatch and State
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    return (
        <TaskContext.Provider
            value={{
                task: state.task
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState
