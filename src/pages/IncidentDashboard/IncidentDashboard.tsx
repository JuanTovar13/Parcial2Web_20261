import { useContext } from "react";
import { IncidentCard } from "../../components/IncidentCard";
import { IncidentsContext } from "../../context/IncidentsContext";

export const IncidentDashboard = () => {
  const { incidentsList } = useContext(IncidentsContext);

  return (
    <>
      <h1>Dashboard incidencias</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {incidentsList.map((incident) => (
          <IncidentCard key={incident.id} incident={incident} />
        ))}
      </div>
    </>
  );
};
