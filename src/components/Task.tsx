import type { TaskInterface } from "../types/TaskInterface";

export const Task = ({ title, description, completed }: TaskInterface) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <h3>{completed ? "Completado" : "No completado"}</h3>
      <button>Cambiar estado</button>
    </>
  );
};
