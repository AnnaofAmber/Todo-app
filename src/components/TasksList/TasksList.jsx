import { TaskItem } from 'components/TaskItem/TaskItem';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getTasks, getFilterTasks } from 'redux/selectors';

export const TasksList = () => {
  const tasks = useSelector(getTasks);
  return (
    <ul>
      {tasks.map(({id, name}) => (
        <TaskItem id={id} key={id} name={name} />
      ))}
    </ul>
  );
};
