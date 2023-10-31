import scss from "./CreateTaskForm.module.scss"

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

        <form className={scss['form-add']} onSubmit={hadnleSubmit}>
            <label htmlFor="createTask"></label>
            <input className={scss['input-add']} type="text" id="createTask" name="text" placeholder="Create a new todo..."/>
            <button className={scss['button-add']} ></button>
        </form>
    )
}