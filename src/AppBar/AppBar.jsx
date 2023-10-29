import { TaskCounter } from "TaskCounter/TaskCounter"
import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from "redux/operations"
import { getTasks } from "redux/selectors"

export const AppBar = () =>{
const tasks = useSelector(getTasks)
const completed = tasks.filter(task => task.completed)
const dispatch = useDispatch()
const handleClear = () => {
     completed.map(({id}) => dispatch(deleteTask(id)))
     return
}
    return(
        <div>
            <TaskCounter/>
            <button type="button" onClick={handleClear}>Clear Completed</button>
        </div>
    )
}