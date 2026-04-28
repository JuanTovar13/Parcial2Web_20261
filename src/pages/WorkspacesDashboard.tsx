import { Filter } from "../components/Filter"
import { List } from "../components/list"
import { useNavigate } from "react-router-dom"

export const WorkspaceDashboard =() => {
    const navigate = useNavigate()

    return(

        <div>
            <Filter/>
            <button onClick={() => navigate("/reserves")}>Go to reserves</button>
            <h1>Workspace Dashboard</h1>
            <List/>
        </div>
    )
}