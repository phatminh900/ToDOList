import styles from "./TaskDay.module.css";
import IconDay from "./IconDay";
import { tasksListActions } from "../../store/taskList-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const TaskDay = () => {
  const taskLists = useSelector((state) => state.taskList.items);
  const taskMyDay = taskLists.find((task) => task.id === "MyDay");
  const dispatch = useDispatch();
  const showTaskHandler = () => {
    dispatch(tasksListActions.currentTaskList(taskMyDay.id));
  };

  return (
    <>
      <div
        className={`${styles["task-day"]} ${taskMyDay.activeState && "active"}`}
        onClick={showTaskHandler}
      >
        <IconDay />
        <span>My Day</span>
      </div>
    </>
  );
};
export default TaskDay;
