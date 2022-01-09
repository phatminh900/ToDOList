import { useState } from "react";
import useCurrentList from "../../helper/helper";
import CloseCompleTaskIcon from "./CloseCompleTaskIcon";
import TaskForm from "./TaskForm";
import styles from "./TaskItems.module.css";
import TaskListItem from "./TaskListItem";

const TaskItems = () => {
  const list = useCurrentList();
  const [isCloseState, setIsCloseState] = useState(true);

  const dayFormat = new Date()
    .toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .slice(0, -6);

  if (!list)
    return (
      <div className={styles["task-items"]}>
        <h2>My Day</h2>
        <p className={styles.date}>{dayFormat}</p>
        <TaskForm />
      </div>
    );
  const completedTasksQuantity = list.completedTasks.length;
  const dateContent = list.id === "MyDay" ? dayFormat : "";
  //check if no task

  const tasksItemUncompleted = list.unCompletedTasks
    .slice()
    .reverse()
    .map((task) => (
      <TaskListItem
        key={task.id}
        name={task.task}
        date={task.date}
        id={task.id}
      />
    ));
  const tasksItemCompleted = list.completedTasks
    .slice()
    .reverse()
    .map((task) => (
      <TaskListItem
        key={task.id}
        name={task.task}
        id={task.id}
        date={task.date}
      />
    ));

  //open list

  const openListCompletedHandler = () => {
    setIsCloseState((prevState) => !prevState);
  };

  return (
    <div className={styles["task-items"]}>
      <h2>{list.name}</h2>
      <p className={styles.date}>{dateContent}</p>
      <TaskForm />
      <ul className={styles["task-items__list task-items__list--uncompleted"]}>
        {tasksItemUncompleted}
      </ul>
      <div
        className={`${styles["tasks-item-completed"]} ${
          !completedTasksQuantity && styles["hidden"]
        }`}
      >
        <div
          className={`${styles["completed-header"]} ${
            isCloseState ? styles.close : styles.open
          }`}
          onClick={openListCompletedHandler}
        >
          <CloseCompleTaskIcon />
          <span>Completed</span>
          <p>{String(completedTasksQuantity).padStart(2, 0)}</p>
        </div>
        <ul className={styles["task-items__list task-items__list--completed"]}>
          {tasksItemCompleted}
        </ul>
      </div>
    </div>
  );
};
export default TaskItems;
