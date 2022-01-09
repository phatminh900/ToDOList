import { configureStore } from "@reduxjs/toolkit";
import taskListSliceReducer from "./taskList-slice";

const store = configureStore({
  reducer: {
    taskList: taskListSliceReducer,
  },
});
export default store;
