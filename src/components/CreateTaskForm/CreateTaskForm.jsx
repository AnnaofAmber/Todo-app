import { useDispatch } from "react-redux"
import { addTask } from "redux/operations"

export const CreateTaskForm = () =>{

const dispatch = useDispatch()
const hadnleSubmit = e => {
    e.preventDefault()
    const form = e.target
    dispatch(addTask(e.target.elements.text.value))
    form.reset()
}

    return (

        <form onSubmit={hadnleSubmit}>
            <label htmlFor="createTask"></label>
            <input type="text" id="createTask" name="text"/>
            <button>Add</button>
        </form>
    )
}