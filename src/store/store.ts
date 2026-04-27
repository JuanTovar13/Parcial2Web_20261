import { configureStore } from '@reduxjs/toolkit';
import workspaceReducer from './slices/appSlice';

export const storeRedux = configureStore({
	reducer: {
		workspace: workspaceReducer,
	},
});

export type RootState = ReturnType<typeof storeRedux.getState>;
export type AppDispatch = typeof storeRedux.dispatch;
