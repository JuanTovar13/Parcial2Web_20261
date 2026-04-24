import { useContext } from "react";
import { IncidentsContext } from "../context/IncidentsContext";

export const IncidentCard = ({ incident }: any) => {
  const { handleIncidentFeature } = useContext(IncidentsContext);
  return (
    <div>
      <p>{incident.id}</p>
      <p>{incident.title}</p>
      <p>{incident.user}</p>
      <p>{incident.category}</p>
      <p>{incident.priority}</p>
      <p>{incident.status}</p>
      <p>{incident.date}</p>
      <p>{incident.description}</p>
      <button onClick={() => handleIncidentFeature(incident)}>Destacar</button>
    </div>
  );
};
