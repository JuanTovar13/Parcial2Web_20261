import { ReservedList } from "../components/reserved"
import { useNavigate } from "react-router-dom"
import { Summary } from "../components/Summary"
import { Filter } from "../components/Filter"

export const ReservedDashboard = () =>{
    const navigate = useNavigate()
    return(
        <div>
            <Filter/>
            <button onClick={() => navigate("/")}>Back to Dashboard</button>
            <div>
            <h1>Reserved</h1>
                <ReservedList/>
            </div>
            <h1>Summary</h1>
                <Summary/>

        </div>
    )
}