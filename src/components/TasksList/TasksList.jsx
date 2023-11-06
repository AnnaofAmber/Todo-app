import Draggable from "react-draggable";
import scss from "./TasksList.module.scss"

import { TaskItem } from 'components/TaskItem/TaskItem';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { statusFilters } from 'redux/constants';
import { getTasks, getFilterStatus } from 'redux/selectors';

const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
        case statusFilters.active:
          return tasks.filter(task => !task.completed);
        case statusFilters.completed:
          return tasks.filter(task => task.completed);
        default:
          return tasks;
}}

export const TasksList = () => {
  const tasks = useSelector(getTasks);
    const statusFilter = useSelector(getFilterStatus)
    const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ul className={scss['task-list']}>
      {visibleTasks.map((task) => (

          <TaskItem id={task.id} key={task.id}  task={task} />
    ))}
    </ul>
  );
};
