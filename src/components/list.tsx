import type { RootState } from "../store/store"
import { useSelector } from "react-redux"


export const List = () => {

    const workspaces = useSelector((state:RootState) => 
    state.workspace.workspace)
    return (
        <div>
            <ul>
                {workspaces.map((workspace, id)=>(
                    <li key={id}>
                        <h2>{workspace.name}</h2>
                        <p>{workspace.type}</p>
                        <p>{workspace.capacity}</p>
                        <p>{workspace.location}</p>
                        <p>{workspace.pricePerHour}</p>
                        <p>{workspace.available}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}