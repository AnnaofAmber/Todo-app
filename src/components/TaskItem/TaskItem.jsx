
import scss from "./TaskItem.module.scss"
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/operations';
import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { getTheme } from "redux/selectors";


export const TaskItem = ({task}) => {
  const dispatch = useDispatch();
  const handleToggle = () => dispatch(toggleCompleted(task))
  const handleDelete = () => dispatch(deleteTask(task.id));
  const theme = useSelector(getTheme)
 
  return (
  
<li className={clsx(scss['task-item'], {
            [scss.dark]:theme, [scss.completed]:task.completed
        })}>
<div className={scss['item-content']}>     
 <input className={clsx(scss['task-complete'], {
            [scss.dark]:theme, [scss.completed]:task.completed
        })} type="checkbox" checked={task.completed} onChange={handleToggle}/>
      {task.text}</div>
      <button className={scss['btn-delete']} type="button" onClick={handleDelete} title={`Delete ${task.text}`}>
      <svg className={scss['svg-delete']} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path  d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z" fill="#494C6B"/>
</svg>
      </button>
    </li>


  );
};
