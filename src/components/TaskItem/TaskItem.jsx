import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/operations';

export const TaskItem = ({task}) => {
  const dispatch = useDispatch();
  const handleToggle = () => dispatch(toggleCompleted(task))
  const handleDelete = () => dispatch(deleteTask(task.id));

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={handleToggle}/>
      {task.text}
      <button type="button" onClick={handleDelete} title={`Delete ${task.text}`}>
        delete
      </button>
    </li>
  );
};
