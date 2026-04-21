import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/slices/TasksSlice";
import { useState } from "react";
import type { RootState } from "../types/storeType";

export const CreateTask = () => {
  const [taskUser, setTaskUser] = useState<string>("");
  const dispatch = useDispatch(); //Mandar información al store
  const tasks = useSelector((state: RootState) => state.tasksReducer.tasksList); //Traer información del store

  const handleTask = (e: any) => {
    e.preventDefault();
    dispatch(addTask(taskUser));
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Create task"
          onChange={(e) => setTaskUser(e.target.value)}
        />
        <button onClick={(e) => handleTask(e)}>Crear tarea</button>
      </form>

      <section>
        {tasks.map((task: any) => (
          <h1>{task}</h1>
        ))}
      </section>
    </>
  );
};
