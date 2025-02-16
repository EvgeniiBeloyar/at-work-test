import { EUserFormFields } from './Enums';

/**
 * @desc Интерфейс для формы редактирования.
 *
 * @prop {string} [EUserFormFields.NAME] - Имя.
 * @prop {string} [EUserFormFields.NICKNAME] - Псевдоним.
 * @prop {string} [EUserFormFields.EMAIL] - Email.
 * @prop {string} [EUserFormFields.CITY] - Город.
 * @prop {string} [EUserFormFields.PHONE] - Телефон.
 * @prop {string} [EUserFormFields.COMPANY] - Компания.
 *
 */
export interface IFormData {
	[EUserFormFields.NAME]: string;
	[EUserFormFields.NICKNAME]: string;
	[EUserFormFields.EMAIL]: string;
	[EUserFormFields.CITY]: string;
	[EUserFormFields.PHONE]: string;
	[EUserFormFields.COMPANY]: string;
}
