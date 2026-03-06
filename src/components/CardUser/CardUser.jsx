export const CardUser = ({ index, user, deleteUser, updateUser }) => {
  return (
    <div key={index}>
      <p>{index}</p>
      <p>{user.email}</p>
      <p>{user.name}</p>
      <button onClick={() => deleteUser(index)}>Eliminar</button>
      <button onClick={() => updateUser(index)}>Actualizar</button>
    </div>
  );
};
