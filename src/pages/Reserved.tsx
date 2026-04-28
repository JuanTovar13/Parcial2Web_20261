import { ReservedList } from "../components/Reserved"
import { useNavigate } from "react-router-dom"
import { Summary } from "../components/Summary"

export const ReservedDashboard = () =>{
    const navigate = useNavigate()
    return(
        <div>
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