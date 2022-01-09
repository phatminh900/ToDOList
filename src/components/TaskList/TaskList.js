import styles from "./TaskList.module.css";
import TaskIconDelete from "./TaskIconDelete";
import TaskIcon from "./TaskIcon";
import { useDispatch, useSelector } from "react-redux";
import { tasksListActions } from "../../store/taskList-slice";

const TaskList = (props) => {
  const currentList = useSelector((state) => state.taskList.currentList);
  const dispatch = useDispatch();
  //className
  // const [activeState,setActiveState]=useState(false)
  const taskActiveHandler = (e) => {
    if (e.target.closest("button")) return;
    dispatch(tasksListActions.currentTaskList(props.id));
    dispatch(tasksListActions.setCurrentTaskListState(props.id));
    // setActiveState(true)
  };
  const deleteTaskListHanlder = () => {
    dispatch(tasksListActions.removeList(props.id));
    //automaticlly change to my day
    dispatch(tasksListActions.currentTaskList());
    dispatch(tasksListActions.setCurrentTaskListState('MyDay'))
  };

  return (
    <ul>
      <li
        className={`${styles["task-item"]} ${
          currentList.id === props.id && "active"
        }`}
        onClick={taskActiveHandler}
      >
        <div>
          <TaskIcon />
          {props.name}
        </div>
        <TaskIconDelete onClick={deleteTaskListHanlder} />
      </li>
    </ul>
  );
};
export default TaskList;
