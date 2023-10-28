import { TaskCounter } from "TaskCounter/TaskCounter"
import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from "redux/operations"
import { getTasks } from "redux/selectors"

export const AppBar = () =>{
const tasks = useSelector(getTasks)
console.log(tasks);
const completed = tasks.filter(task => task.completed).map(task=>task.id)
console.log(completed);
const dispatch = useDispatch()
const handleClear = () => {
     completed.map(id => dispatch(deleteTask(id)))
     return
}
    return(
        <div>
            <TaskCounter/>
            <button type="button" onClick={handleClear}>Clear Completed</button>
        </div>
    )
}