import { initialIncidentsData } from "../data/data";
import { createContext, useState } from "react";

export const IncidentsContext = createContext(null);

export const IncidentsProvider = ({ children }) => {
  //Lista de incidencias
  const [incidentsList, setIncidentsList] = useState(initialIncidentsData);
  //Lista de incidencias destacados
  const [incidentsFeature, setIncidentsFeature] = useState([]);
  //Estados para los filtros
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // const handleIncidentFeature = (incident: any) => {
  //   const newList = incidentsFeature.includes(incident)
  //     ? incidentsFeature.filter((item: any) => item.id !== incident.id)
  //     : [...incidentsFeature, incident];

  //   setIncidentsFeature(newList);

  //   // setIncidentsFeature([...incidentsFeature, incident]);
  // };

  const handleIncidentFeature = (incident: any) => {
    const isIncidentFeatured = incidentsFeature.includes(incident);
    let newList;

    if (isIncidentFeatured) {
      newList = incidentsFeature.filter((item: any) => item.id !== incident.id);
    } else {
      newList = [...incidentsFeature, incident];
    }

    setIncidentsFeature(newList);
    console.log(newList);
  };

  return (
    <IncidentsContext.Provider
      value={{ incidentsList, setIncidentsList, handleIncidentFeature }}
    >
      {children}
    </IncidentsContext.Provider>
  );
};
