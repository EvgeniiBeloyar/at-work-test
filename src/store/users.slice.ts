import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useAppSelector } from 'Common/hooks';
import { RootState } from './store';
import { User } from './models';
import { IFormData } from 'Components/UserEdit/models';

/**
 * @desc Интерфейс состояния пользователя
 *
 * @prop {User[]} activeUsers - Активные пользователи
 * @prop {User[]} archivedUsers - Архивные пользователи
 * @prop {boolean} isLoading - Загрузка
 * @prop {boolean} error - Ошибка
 *
 */
interface IUsersReduxState {
	activeUsers: User[];
	archivedUsers: User[];
	isLoading: boolean;
	error: boolean;
}

/** Получение списка пользователей */
export const fetchUsers = createAsyncThunk<User[], { usersLimit: number }>(
	'users/fetchUsers',
	async ({ usersLimit }, { rejectWithValue }) => {
		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${usersLimit}`);

			if (!response.ok) {
				throw new Error(response.statusText);
			}

			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
		}
	},
);

const initialState: IUsersReduxState = {
	activeUsers: [],
	archivedUsers: [],
	isLoading: null,
	error: null,
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		moveToArchive: (state, action: PayloadAction<number>) => {
			const userToArchive = state.activeUsers.find(user => user.id === action.payload);

			if (userToArchive) {
				state.activeUsers = state.activeUsers.filter(user => user.id !== action.payload);
				state.archivedUsers.push(userToArchive);
			}
		},
		moveToActive: (state, action: PayloadAction<number>) => {
			const userToActive = state.archivedUsers.find(user => user.id === action.payload);

			if (userToActive) {
				state.archivedUsers = state.archivedUsers.filter(user => user.id !== action.payload);
				state.activeUsers.push(userToActive);
			}
		},
		updateUser: (state, action: PayloadAction<{ id: number; formData: IFormData }>) => {
			const user = state.activeUsers.find(user => user.id === action.payload.id);

			if (user) {
				user.name = action.payload.formData.name;
				user.username = action.payload.formData.nickname;
				user.email = action.payload.formData.email;
				user.address.city = action.payload.formData.city;
				user.phone = action.payload.formData.phone;
				user.company.name = action.payload.formData.company;
			}
		},
		removeUser: (state, action: PayloadAction<number>) => {
			state.activeUsers = state.activeUsers.filter(user => user.id !== action.payload);
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.isLoading = false;
				state.activeUsers = action.payload;
			})
			.addCase(fetchUsers.rejected, state => {
				state.isLoading = false;
				state.error = true;
			});
	},
});

const productSelector = (state: RootState): IUsersReduxState => state.users;

export const useUsersSelector = (): IUsersReduxState => useAppSelector(productSelector);

export const { moveToArchive, moveToActive, updateUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
