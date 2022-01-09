import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import TaskItems from "./components/TaskItems/TaskItems";
import TaskLists from "./components/TaskList/TaskLists";
import { tasksListActions } from "./store/taskList-slice";
import getTime from "./helper/getTime";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todoList"));
    if (!data) return;

    dispatch(tasksListActions.setData(data));
    //set myday to current list
    dispatch(tasksListActions.currentTaskList());
    dispatch(tasksListActions.setCurrentTaskListState('MyDay'))
  //check if new day

    const time=getTime()
    dispatch(tasksListActions.myDayTask(time))
  }, [dispatch]);


  return (
    <>
      <Header />
      <Layout>
        <TaskLists />
        <TaskItems />
      </Layout>
    </>
  );
}

export default App;
