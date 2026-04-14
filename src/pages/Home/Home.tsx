import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const Home = () => {
  const { emailContext } = useContext(UserContext);

  return <h1>Bienvenido, {emailContext}</h1>;
};
