import { createContext, useState } from "react";

// 2do paso: Definir el tipado del contexto
type UserContextType = {
  emailContext: string;
  setEmailContext: (email: string) => void;
  nameContext: string;
  setNameContext: (name: string) => void;
};

// 1er paso: Crear el contexto
export const UserContext = createContext<UserContextType | null>(null);

//3er paso: Crear el provider (mensajero) para agrupar que paginas/componentes pueden utilizarlo
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [emailContext, setEmailContext] = useState("");
  const [nameContext, setNameContext] = useState("");

  //Esta linea lo que hace es decir que paginas o componentes pueden utilizar este
  return (
    //Value es el paquete
    <UserContext.Provider
      value={{ emailContext, setEmailContext, nameContext, setNameContext }}
    >
      {children}
    </UserContext.Provider>
  );
};
