/**
 * @desc Интерфейс для формы редактирования.
 *
 * @prop {string} name - Имя.
 * @prop {string} nickname - Псевдоним.
 * @prop {string} email - Email.
 * @prop {string} city - Город.
 * @prop {string} phone - Телефон.
 * @prop {string} company - Компания.
 *
 */
export interface IFormData {
	name: string;
	nickname: string;
	email: string;
	city: string;
	phone: string;
	company: string;
}
