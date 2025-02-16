import { EUserFormFields } from '../Enums';

export const TRANSLATE = {
	BACK: 'Назад',
	PROFILE: 'Данные профиля',
	TO_SAVE: 'Сохранить',
	VALIDATE_FORM: 'Это поле не может быть пустым',
	LABELS: {
		[EUserFormFields.NAME]: 'Имя',
		[EUserFormFields.NICKNAME]: 'Никнейм',
		[EUserFormFields.EMAIL]: 'Почта',
		[EUserFormFields.CITY]: 'Город',
		[EUserFormFields.PHONE]: 'Телефон',
		[EUserFormFields.COMPANY]: 'Название компании',
	},
	PLACEHOLDERS: {
		[EUserFormFields.NAME]: 'Введите имя',
		[EUserFormFields.NICKNAME]: 'Введите никнейм',
		[EUserFormFields.EMAIL]: 'Введите email',
		[EUserFormFields.CITY]: 'Введите город',
		[EUserFormFields.PHONE]: 'Введите телефон',
		[EUserFormFields.COMPANY]: 'Введите название компании',
	},
};
