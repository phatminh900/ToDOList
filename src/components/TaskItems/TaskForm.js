import styles from "./TaskForm.module.css";
import Input from "../../UI/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { tasksListActions } from "../../store/taskList-slice";
const TaskForm = () => {
  const [task, setTask] = useState("");
  const [activeForm, setActiveForm] = useState(false);

  const dispatch = useDispatch();
  // if one more words show Add button
  let buttonAddClasses='hidden'
  if(task.length) buttonAddClasses='' 

  const taskInputHandlder = (e) => {
    setTask(e.target.value);
  };
  const submitTaskHandler = (e) => {
    e.preventDefault();
    if(!task) return
    const taskItem = {
      task,
      id: Math.random(),
      checked: false,
      date: Date.now(),
    };
    dispatch(tasksListActions.addTaskInCurrentList(taskItem));

    setTask("");
  };
  const formActiveHandler = () => {
    setActiveForm(true);
  };
  const formUnActiveHandler = () => {
    setActiveForm(false);
  };
  const input = {
    placeholder: "Add a task",
    type: "text",
    value: task,
  };
  return (
    <form
      className={`${styles["task-form"]}  ${
        activeForm && styles["active-form"]
      }`}
      onSubmit={submitTaskHandler}
    >
      <Input
        input={input}
        activeForm={activeForm}
        onClick={formActiveHandler}
        onBlur={formUnActiveHandler}
        onChange={taskInputHandlder}
      />
      <button className={buttonAddClasses}type="submit">Add</button>
    </form>
  );
};
export default TaskForm;
