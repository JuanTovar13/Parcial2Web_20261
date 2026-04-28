import { useDispatch } from "react-redux"
import type { AppDispatch } from "../store/store"
import { filterWorkspace } from "../store/slices/appSlice"
import { useState } from "react"

export const Filter = () => {
    const dispatch = useDispatch<AppDispatch>()
    const[filter, setFilter] = useState('')
    

    return(
        <div>
        <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter ..."
      />
              <button onClick={() => dispatch(filterWorkspace({ filter }))}>Filter</button>

        </div>
    )
}