import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users.slice';
import appReducer from './app.slice';

export const store = configureStore({
	reducer: {
		app: appReducer,
		users: usersReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
