import { createSlice } from "@reduxjs/toolkit";
import type { TasksSliceType } from "../../types/TaskSliceType";

const initialState: TasksSliceType = {
  tasksList: [],
};

const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      //   state.tasksList = [...state.tasksList, action.payload];
      state.tasksList.push(action.payload);
    },
    // deleteTask: (state, action) => {
    //   //   state.tasksList = [...state.tasksList, action.payload];
    //   state.tasksList.filter(action.payload);
    // },
  },
});

export const { addTask } = TasksSlice.actions;
export default TasksSlice.reducer;
