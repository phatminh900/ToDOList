import { createSlice } from "@reduxjs/toolkit";
import getTime from "../helper/getTime";

const currentTaskListItem = (state, action) => {
  return state.items.find((taskList) => taskList.id === state.currentList.id);
};

const defaultTaskList = [
  {
    name: "My Day",
    id: "MyDay",
    unCompletedTasks: [],
    completedTasks: [],
    date: getTime(),
    activeState: true,
  },
];
const taskListsSlice = createSlice({
  name: "task-lists",
  initialState: {
    items: defaultTaskList,
    currentList: {},
  },
  reducers: {
    setData(state, action) {
      state.items = action.payload;
    },
    //set if new Day (My day remove all old task in it)
    myDayTask(state, action) {
      const [myDayTaskList] = state.items;
      const { day } = myDayTaskList.date;
      const { month } = myDayTaskList.date;
      const { year } = myDayTaskList.date;
      const date = [day, month, year];
      const competition = Object.values(action.payload);
      const isSame = date.every((val, i) => val === competition[i]);
      if (!isSame) {
        myDayTaskList.completedTasks.length = 0;
        myDayTaskList.unCompletedTasks.length = 0;
        //set for new Day
        myDayTaskList.date = action.payload;
      }
    },
    addList(state, action) {
      state.items.push(action.payload);
    },
    removeList(state, action) {
      const findItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items.splice(findItemIndex, 1);
    },
    currentTaskList(state, action) {
      //
      if (!action.payload) {
        state.currentList = defaultTaskList[0];
        return;
      }
      const taskListItem = state.items.find(
        (taskList) => taskList.id === action.payload
      );

      state.currentList = { ...taskListItem };
    },
    setCurrentTaskListState(state, action) {
      const taskListItem = state.items.find(
        (taskList) => taskList.id === action.payload
      );
      //clear all active state before
      state.items.forEach((item) => (item.activeState = false));
      //current state active
      taskListItem.activeState = true;
    },
    addTaskInCurrentList(state, action) {
      //begining no payload

      const currentTaskList = currentTaskListItem(state);
      currentTaskList.unCompletedTasks.push(action.payload);
    },
    //check item
    checkTaskItem(state, action) {
      const currentTaskList = currentTaskListItem(state);
      const taskChecked = currentTaskList.unCompletedTasks.find(
        (task) => task.id === action.payload
      );
      taskChecked.checked = true;
      //
      const taskCheckedIndex = currentTaskList.unCompletedTasks.findIndex(
        (task) => task.id === action.payload
      );
      //remove from uncompleted Task
      currentTaskList.unCompletedTasks.splice(taskCheckedIndex, 1);
      //move to completed Task
      currentTaskList.completedTasks.push(taskChecked);
    },
    unCheckTaskItem(state, action) {
      const currentTaskList = currentTaskListItem(state);
      const taskChecked = currentTaskList.completedTasks.find(
        (task) => task.id === action.payload
      );
      taskChecked.checked = false;
      //
      const taskCheckedIndex = currentTaskList.completedTasks.findIndex(
        (task) => task.id === action.payload
      );
      //remove from completed Task
      currentTaskList.completedTasks.splice(taskCheckedIndex, 1);
      //move to uncompleted Task
      currentTaskList.unCompletedTasks.push(taskChecked);
    },

    removeTaskItem(state, action) {
      const currentTaskList = currentTaskListItem(state);
      const taskDeletedIndex = currentTaskList.unCompletedTasks.findIndex(
        (task) => task.id === action.payload
      );
      if (taskDeletedIndex !== -1)
        currentTaskList.unCompletedTasks.splice(taskDeletedIndex, 1);
      //if -1 means not in uncompleted task
      if (taskDeletedIndex === -1) {
        const taskDeletedIndex = currentTaskList.completedTasks.findIndex(
          (task) => task.id === action.payload
        );
        currentTaskList.completedTasks.splice(taskDeletedIndex, 1);
      }
    },
  },
});

// export const sendData = (data) => {
//   return () => {
//     localStorage.setItem("todoList", JSON.stringify(data));
//   };
// };
//custom action creater

export const tasksListActions = taskListsSlice.actions;
export default taskListsSlice.reducer;
