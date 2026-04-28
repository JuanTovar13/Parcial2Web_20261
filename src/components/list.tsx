import type { RootState, AppDispatch } from "../store/store"
import { useSelector, useDispatch } from "react-redux"
import { handleReservation } from "../store/slices/appSlice"


export const List = () => {
    const dispatch = useDispatch<AppDispatch>()
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
                        <button onClick={() => dispatch(handleReservation({workspace}))}>Reserve</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}