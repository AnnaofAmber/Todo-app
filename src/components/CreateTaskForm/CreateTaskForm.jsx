import clsx from "clsx"
import scss from "./CreateTaskForm.module.scss"

import { useDispatch } from "react-redux"
import { addTask } from "redux/operations"
import { useSelector } from "react-redux"
import { getTheme } from "redux/selectors"

export const CreateTaskForm = () =>{
const theme = useSelector(getTheme)
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
            <input className={clsx(scss['input-add'], {
            [scss.dark]:theme
        })} type="text" id="createTask" name="text" placeholder="Create a new todo..."/>
            <button className={clsx(scss['button-add'], {
            [scss.dark]:theme
        })} ></button>
        </form>
    )
}