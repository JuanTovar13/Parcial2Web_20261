import "./App.css";
import { Routes, Route } from "react-router-dom";
import { IncidentsProvider } from "./context/IncidentsContext";
import { IncidentDashboard } from "./pages/IncidentDashboard/IncidentDashboard";

function App() {
  return (
    <IncidentsProvider>
      <Routes>
        <Route path="/" element={<IncidentDashboard />} />
      </Routes>
    </IncidentsProvider>
  );
}

export default App;
