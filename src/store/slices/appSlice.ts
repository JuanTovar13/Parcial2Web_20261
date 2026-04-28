
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import data from "../../data/data.json"
import type { InitialWorkspaces, Workspace } from '../../types/WorkspaceTypes';


const initialState: InitialWorkspaces = {
	workspace: [...data],
	reserved: []
};

const workspaceSlice = createSlice({
	name: 'workspace',
	initialState,
	reducers: {
		handleReservation: (state, action: PayloadAction<{workspace: Workspace}>)=>{
			 const exists =state.reserved.some(
				(item)=>item.id === action.payload.workspace.id
			 )
			 if (!exists){
				state.reserved.push(action.payload.workspace)
			 } else {
				state.reserved= state.reserved.filter(
					(item) => item.id !== action.payload.workspace.id
				)
			 }
		},
			filterWorkspace(state, action: PayloadAction<{ filter: string }>) {
		const { filter } = action.payload
		if (!filter) {
			state.workspace = [...data]
			state.reserved = state.reserved.filter((workspace) =>
			data.some((item) => item.id === workspace.id)
			)
			return
		}
		state.workspace = [...data].filter(
			(workspace) =>
			workspace.type.trim().toLowerCase() === filter
		)
		state.reserved = state.reserved.filter((reserve) => 
			reserve.type.trim().toLowerCase() === filter 
	)
},
	}
});

export const { handleReservation, filterWorkspace } = workspaceSlice.actions;
export default workspaceSlice.reducer;
