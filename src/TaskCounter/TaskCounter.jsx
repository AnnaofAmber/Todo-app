import { useSelector } from "react-redux"
import { getTasks } from "redux/selectors"

export const TaskCounter = () => {
const tasks = useSelector(getTasks)

const count = tasks.reduce((acc, task) => {
if(!task.completed){
    acc.active += 1;
}
return acc
}, {active:0})

    return(
        <p>{count.active} items left</p>
    )
}