import scss from "./TaskItem.module.scss"
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/operations';

export const TaskItem = ({task}) => {
  const dispatch = useDispatch();
  const handleToggle = () => dispatch(toggleCompleted(task))
  const handleDelete = () => dispatch(deleteTask(task.id));

  return (
    <li className={scss['task-item']}>
<div className={scss['item-content']}>      <input className={scss['task-complete']} type="checkbox" checked={task.completed} onChange={handleToggle}/>
      {task.text}</div>
      <button className={scss['btn-delete']} type="button" onClick={handleDelete} title={`Delete ${task.text}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path  d="M11.7851 0.471404L11.3137 0L5.89256 5.42115L0.471404 0L0 0.471404L5.42115 5.89256L0 11.3137L0.471404 11.7851L5.89256 6.36396L11.3137 11.7851L11.7851 11.3137L6.36396 5.89256L11.7851 0.471404Z" fill="#494C6B"/>
</svg>
      </button>
    </li>
  );
};
