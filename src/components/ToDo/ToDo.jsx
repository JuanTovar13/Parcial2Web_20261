import { useState } from 'react';

export const ToDo = () => {
  const [inputValue, setInputValue] = useState(''); //Contener una tarea
  const [tasks, setTasks] = useState([]); //Contener muchas tareas

  const saveTasks = (e) => {
    e.preventDefault();
    setTasks([...tasks, inputValue]);
  };

  const deleteTask = (indexTask) => {
    const tasksFiltered = tasks.filter((_, index) => indexTask !== index);
    setTasks(tasksFiltered);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Ingresa la tarea"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={(e) => saveTasks(e)}>Ingresar tarea</button>
      </form>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <>
              <li>{task}</li>
              <button onClick={() => deleteTask(index)}>Eliminar</button>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};
