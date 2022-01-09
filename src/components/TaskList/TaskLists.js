import styles from "./TaskLists.module.css";
import TaskListForm from "./TaskListForm";
import TaskList from "./TaskList";
import { useSelector } from "react-redux";
import TaskDay from "./TaskDay";
import { useEffect } from "react";
let initial=true
const TaskLists = () => {
  const taskLists = useSelector((state) => state.taskList.items);
  const customTasks=taskLists.filter(task=>task.id!=='MyDay')
  const taskListItem = customTasks.map((task) => (
    <TaskList key={task.id} name={task.name} id={task.id} tasks={task.tasks} />
  ));
  //store data
  useEffect(()=>{
    if(initial){
      initial=false
      return
    }
    localStorage.setItem('todoList',JSON.stringify(taskLists))
  },[taskLists])
  return (
    <div className={styles["task-list"]}>
      <TaskDay />
      {taskListItem}
      <TaskListForm />
    </div>
  );
};
export default TaskLists;
