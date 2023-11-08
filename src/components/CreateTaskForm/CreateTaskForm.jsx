import clsx from "clsx"
import scss from "./CreateTaskForm.module.scss"

import { useDispatch } from "react-redux"
import { addTask } from "redux/operations"
import { useSelector } from "react-redux"
import { getTheme } from "redux/selectors"
import Notiflix from "notiflix"
import { useForm } from 'react-hook-form';


export const CreateTaskForm = () =>{
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    


const theme = useSelector(getTheme)
const dispatch = useDispatch()


const onSubmit = task => {
if(task.text !==""){
    dispatch(addTask(task.text))
    reset()
}
else{
    Notiflix.Notify.warning('Field cannot be empty ')}
}

    return (
        <form className={scss['form-add']} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="createTask"></label>
            <input {...register('text', { required: true })} className={clsx(scss['input-add'], {
            [scss.dark]:theme, [scss['input-required']]:errors.text
        })} type="text" id="createTask" name="text" placeholder="Create a new todo..."/>
        {errors.text && <div className={scss['container-required']}><span className={scss.required}>This field is required</span></div>}
        
            <button className={clsx(scss['button-add'], {
            [scss.dark]:theme
        })} ></button>
        </form>
    )
}