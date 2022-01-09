import TaskItemUnCheckIcon from "./TaskItemUnCheckIcon";
import styles from "./TaskListItem.module.css";
import TaskIconDelete from "../TaskList/TaskIconDelete";
import { tasksListActions } from "../../store/taskList-slice";
import { useDispatch } from "react-redux";
import useCurrentList from "../../helper/helper";
import TaskItemCheckIcon from "./TaskItemCheckIcon";


// const currentLocale=navigator.language || 'en-us'


const TaskListItem = (props) => {
  const list = useCurrentList();

  const itemUnChecked = list.unCompletedTasks.find(
    (task) => task.id === props.id
  );
  const dispatch = useDispatch();
  const checkTaskItemHandler = () => {
    dispatch(tasksListActions.checkTaskItem(props.id));
  };
  const unCheckTaskItemHandler = () => {
    dispatch(tasksListActions.unCheckTaskItem(props.id));
  };
  const deleteTaskItemHandler = () => {
    dispatch(tasksListActions.removeTaskItem(props.id));
  };
  //if no have uncheck item
  let taskIcon = <TaskItemUnCheckIcon type='Mask as completed!' onClick={checkTaskItemHandler} />;
  if (!itemUnChecked) {
    taskIcon = <TaskItemCheckIcon type='Mask as uncompleted!' onClick={unCheckTaskItemHandler} />;
  }
  const classes = `${!itemUnChecked ? styles["checked"] : ""}`;

  const dateTime = Math.round(
    (new Date() - props.date) / (24 * 60 * 60 * 1000)
  );
  //different state of time
  let day;
  switch (dateTime) {
    case 0:
      day = "Today";
      break;
    case 1:
      day = "Yesterday";
      break;
    case 2:
      day = "2 days ago";
      break;
    case 3:
      day = "3 days ago";
      break;
    case 4:
      day = "4 days ago";
      break;
    default:
      day = new Date(props.date).toLocaleDateString('vi-vn');
  }
  //if new date non show
  if (list.id === "MyDay") day = "";
  return (
    <li className={styles["list-item"]}>
      <div>
        {taskIcon}
        <p className={classes}>
          <span>{props.name}</span>
          <span className={styles.date}>{day}</span>
        </p>
      </div>
      <TaskIconDelete onClick={deleteTaskItemHandler} />
    </li>
  );
};
export default TaskListItem;
