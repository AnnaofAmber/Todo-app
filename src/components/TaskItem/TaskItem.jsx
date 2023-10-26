export const TaskItem = ({task}) => {
    return(
        <li>
            <input type="checkbox"/>
            {task} task
            <button>close</button>
            </li>
    )
}