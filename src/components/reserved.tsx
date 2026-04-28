import type { RootState, AppDispatch } from "../store/store"
import { useSelector, useDispatch } from "react-redux"
import { handleReservation } from "../store/slices/appSlice"


export const ReservedList = () => {
    const dispatch = useDispatch<AppDispatch>()
    const reserves = useSelector((state:RootState) => 
    state.workspace.reserved)
    return (
        <div>
            <ul>
                {reserves.map((workspace, id)=>(
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