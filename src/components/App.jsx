import scss from "./App.module.scss"

import { useDispatch } from "react-redux";
import { CreateTaskForm } from "./CreateTaskForm/CreateTaskForm";
import { Layout } from "./Layout/Layout";
import { TasksList } from "./TasksList/TasksList";
// import { getError, getIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchTasks } from "redux/operations";
import { StatusFilter } from "./StatusFilter/StatusFilter";
import { AppBar } from "components/AppBar/AppBar";

export const App = () => {
 const dispatch = useDispatch()
//  const isLoading = useSelector(getIsLoading);
//  const error = useSelector(getError);

 useEffect(()=>{
dispatch(fetchTasks())
 }, [dispatch])

  return (
<Layout>
  <CreateTaskForm/>
  <TasksList/>
  <div className={scss['appBar-container']}>
  <AppBar/>
  <StatusFilter/>
  </div>
</Layout>
  );
};
