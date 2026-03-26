import { useState } from "react";
import "./App.css";
import type { TaskInterface } from "./types/TaskInterface";
import { Task } from "./components/Task";

function App() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [taskList, setTaskList] = useState<TaskInterface[]>([]);

  const createTask = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: TaskInterface = {
      title: title,
      description: description,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
  };

  return (
    <>
      <form>
        <input
          placeholder="Crear tarea"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={(e) => createTask(e)}>Crear tarea</button>
      </form>
      {taskList.map((task) => {
        return (
          <Task
            title={task.title}
            description={task.description}
            completed={task.completed}
          />
        );
      })}
    </>
  );
}

export default App;
