import { List } from "../components/List"
import { useNavigate } from "react-router-dom"

export const WorkspaceDashboard =() => {
    const navigate = useNavigate()

    return(
        <div>
            <button onClick={() => navigate("/reserves")}>Go to reserves</button>
            <h1>Workspace Dashboard</h1>
            <List/>
        </div>
    )
}