import { Route, Routes } from "react-router-dom";
import { WorkspaceDashboard } from "./pages/WorkspacesDashboard";
import { ReservedDashboard } from "./pages/Reserved";

function App() {
	return <>
	<Routes>
		<Route path="/" element={<WorkspaceDashboard/>}></Route>
		<Route path="/reserves" element={<ReservedDashboard/>}/>
	</Routes>
	
	</>;
}

export default App;
