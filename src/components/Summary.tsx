import type { RootState } from "../store/store"
import { useSelector } from "react-redux"


export const Summary = () => {
    const workspaces = useSelector((state:RootState) => 
    state.workspace.workspace)
    const reserved = useSelector((state:RootState) => 
    state.workspace.reserved)

    
    return(
        <div>
            <h4>Total Spaces: {workspaces.length}</h4>
            <h4>Available: {workspaces.filter((item) => item.available === true).length}</h4>
            <h4>Reserves: {reserved.length}</h4>
            <h4>Total Income: </h4>
            
        </div>
    )
}