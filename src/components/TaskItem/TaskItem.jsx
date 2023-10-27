import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/operations';

export const TaskItem = ({ name, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <li>
      <input type="checkbox" />
      {name} task
      <button type="button" onClick={handleDelete} title={`Delete ${name}`}>
        delete
      </button>
    </li>
  );
};
