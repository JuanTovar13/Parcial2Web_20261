import { useState } from 'react';

export const Form = () => {
  //   const [userEmail, setUserEmail] = useState('');
  //   const [userPassword, setUserPassword] = useState('');
  //   console.log(userEmail);
  //   console.log(userPassword);

  //   const saveEmail = (event) => {
  //     setUserEmail(event.target.value);
  //   };

  //   const savePassword = (event) => {
  //     setUserPassword(event.target.value);
  //   };

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [showValues, setShowValues] = useState(false);

  const renderUser = () => {
    setShowValues(true);
  };

  return (
    <form>
      <input
        type="email"
        placeholder="Ingresa tu correo"
        // onChange={(event) => {
        //   setUserEmail(event);
        // }}
        onChange={(event) => setUserData({ ...userData, email: event.target.value })}
      />
      <input
        type="password"
        placeholder="Ingresa tu contraseña"
        onChange={(event) => setUserData({ ...userData, password: event.target.value })}
      />
      <button onClick={renderUser}>Iniciar sesión</button>
      <p>{showValues ? userData.email : null}</p>
    </form>
  );
};

// const input = document.querySelector('input');
// input.addEventListener('change', () => {})

// showValues ? userData.email : null;

// if (showValues === true) {
//   userData.email;
// } else {
//   null;
// }
