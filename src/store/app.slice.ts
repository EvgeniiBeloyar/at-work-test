import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useAppSelector } from 'Common/hooks';
import { RootState } from './store';

/**
 * @desc Интерфейс состояния приложения
 *
 * @prop {boolean} isActivePopup - Показать попап
 *
 */
interface IAppReduxState {
	isActivePopup: boolean;
}

const initialState: IAppReduxState = {
	isActivePopup: false,
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setActivePopup: (state, action: PayloadAction<boolean>) => {
			state.isActivePopup = action.payload;
		},
	},
});

const appSelector = (state: RootState): IAppReduxState => state.app;

export const useMyAppSelector = (): IAppReduxState => useAppSelector(appSelector);

export const { setActivePopup } = appSlice.actions;
export default appSlice.reducer;
