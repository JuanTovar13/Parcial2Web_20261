
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
		}

	},
});

export const { handleReservation } = workspaceSlice.actions;
export default workspaceSlice.reducer;
