import scss from "./App.module.scss"

import { useDispatch } from "react-redux";
import { CreateTaskForm } from "./CreateTaskForm/CreateTaskForm";
import { Layout } from "./Layout/Layout";
import { TasksList } from "./TasksList/TasksList";
import { getIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchTasks } from "redux/operations";
import { StatusFilter } from "./StatusFilter/StatusFilter";
import { AppBar } from "components/AppBar/AppBar";
import { useSelector } from "react-redux";
import { getTasks, getTheme } from "redux/selectors";
import clsx from "clsx";
import { Loader } from "./Loader/Loader";

export const App = () => {
const dispatch = useDispatch()

const tasks = useSelector(getTasks) 
const theme = useSelector(getTheme)
const isLoading = useSelector(getIsLoading)
 useEffect(()=>{
dispatch(fetchTasks())
 }, [dispatch])

  return (
<div className={clsx(scss.container, {
            [scss.dark]:theme})}>
<Layout>
  <CreateTaskForm/>
  {isLoading && <Loader/>}
  <TasksList/>
  <div className={scss['appBar-container']}>
 {tasks.length !== 0? (<> <AppBar/>
  <StatusFilter/></>): <p className={clsx(scss.none, {
            [scss.dark]:theme})}>You have no todo yet</p>}
  </div>
</Layout>
</div>
  );
};
