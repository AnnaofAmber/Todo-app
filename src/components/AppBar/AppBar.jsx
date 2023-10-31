import scss from './AppBar.module.scss'

import { TaskCounter } from "components/TaskCounter/TaskCounter"
import clsx from "clsx"
import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from "redux/operations"
import { getTasks, getTheme } from "redux/selectors"

export const AppBar = () =>{
    const theme = useSelector(getTheme)
const tasks = useSelector(getTasks)
const completed = tasks.filter(task => task.completed)
const dispatch = useDispatch()
const handleClear = () => {
     completed.map(({id}) => dispatch(deleteTask(id)))
     return
}
    return(
        <div className={clsx(scss.wrapper, {
            [scss.dark]:theme
        })}>
            <TaskCounter/>
            <button className={scss['btn-clear']} type="button" onClick={handleClear}>Clear Completed</button>
        </div>
    )
}