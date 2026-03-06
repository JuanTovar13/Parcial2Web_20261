import { useState } from 'react';
import { CardUser } from '../CardUser/CardUser';

export const CrudUser = () => {
  const [inputName, setInputName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [users, setUsers] = useState([]);

  const createUser = (e) => {
    e.preventDefault();
    setUsers([...users, { name: inputName, email: inputEmail }]);
  };

  const deleteUser = (id) => {
    const usersFiltered = users.filter((_, index) => index !== id);
    setUsers(usersFiltered);
  };

  const updateUser = (id) => {
    const userUpdates = users.map((user, index) => {
      return index === id ? { ...user, name: inputName, email: inputEmail } : user;
    });

    setUsers(userUpdates);

    // setUsers((prev) =>
    //   prev.map((user, index) =>
    //     index === id ? { ...user, name: inputName, email: inputEmail } : user
    //   )
    // );
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setInputName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Correo"
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <button onClick={(e) => createUser(e)}>Crear</button>
      </form>
      {users.map((user, index) => (
        <CardUser
          user={user}
          index={index}
          deleteUser={deleteUser}
          updateUser={updateUser}
        />
      ))}
    </>
  );
};
