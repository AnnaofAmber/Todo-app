import { useDispatch } from 'react-redux';
import scss from './TasksList.module.scss';

import { TaskItem } from 'components/TaskItem/TaskItem';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { statusFilters } from 'redux/constants';
import { getTasks, getFilterStatus } from 'redux/selectors';
import { setTasks } from 'redux/tasksSlice';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TasksList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getFilterStatus);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  const dispatch = useDispatch();


  const handleDrop = droppedItem => {
    if (!droppedItem.destination) return;
    var updatedList = [...visibleTasks];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    console.log(updatedList);
    dispatch(setTasks(updatedList));
  };


  return (
    <DragDropContext onDragEnd={handleDrop}>
      <Droppable droppableId={`${scss['task-list']}`}>
        {provided => (
          <ul
            className={scss['task-list']}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {visibleTasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {provided => (
                  <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                  >
                    {' '}
                    <TaskItem id={task.id} task={task} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

