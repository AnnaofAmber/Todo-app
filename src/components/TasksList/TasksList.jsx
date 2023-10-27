import { TaskItem } from 'components/TaskItem/TaskItem';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getTasks, getFilterTasks } from 'redux/selectors';

export const TasksList = () => {
  const tasks = useSelector(getTasks);
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem id={task.id} key={task.id} task={task} />
      ))}
    </ul>
  );
};
