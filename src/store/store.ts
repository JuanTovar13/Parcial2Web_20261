import { configureStore } from "@reduxjs/toolkit";
import TasksReducer from "./slices/TasksSlice";

export const storeRedux = configureStore({
  reducer: {
    tasksReducer: TasksReducer,
    // authReducer: AuthReducer,
  },
});
