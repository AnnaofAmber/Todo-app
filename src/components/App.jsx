import { CreateTaskForm } from "./CreateTaskForm/CreateTaskForm";
import { Layout } from "./Layout/Layout";
import { TasksList } from "./TasksList/TasksList";

export const App = () => {
 


  return (
<Layout>
  <CreateTaskForm/>
  <TasksList/>
</Layout>
  );
};
