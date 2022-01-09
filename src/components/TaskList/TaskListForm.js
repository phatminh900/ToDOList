import { useDispatch } from "react-redux";
import Input from "../../UI/Input";
import styles from "./TaskListForm.module.css";
import {  tasksListActions } from "../../store/taskList-slice";
import {  useState } from "react";




const TaskListForm = () => {
  const [inputTaskList, setInputTaskList] = useState("");

  const dispatch = useDispatch();

  const input = {
    type: "text",
    placeholder: "New List",
    value: inputTaskList,
  };
  //add list
  const inputTaskListHandler = (e) => {
    setInputTaskList(e.target.value);
  };

  const addTaskHandler = (e) => {
    e.preventDefault();
    if(!inputTaskList) return
    const newList = {
      name: inputTaskList,
      id: String(Math.random()),
      unCompletedTasks: [],
      completedTasks:[],
      activeState:false,
    };
    dispatch(tasksListActions.addList(newList));
    setInputTaskList("");
  };
  //

  return (
    <form className={styles["task-list-form"]} onSubmit={addTaskHandler}>
      <Input input={input} onChange={inputTaskListHandler} />
    </form>
  );
};
export default TaskListForm;
