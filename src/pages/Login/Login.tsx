import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setEmailContext } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailContext(email);
    navigate("/home");
  };

  return (
    <form>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Correo" />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <button onClick={(e) => handleSubmit(e)}>Ingresar</button>
    </form>
  );
};
