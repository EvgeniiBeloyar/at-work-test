/**
 * @desc Интерфейс геолокации
 *
 * @prop {string} lat - Широта
 * @prop {string} lng - Долгота
 */
interface Geo {
	lat: string;
	lng: string;
}

/**
 * @desc Интерфейс адреса
 *
 * @prop {string} street - Улица
 * @prop {string} suite - Квартира
 * @prop {string} city - Город
 * @prop {string} zipcode - Почтовый индекс
 * @prop {Geo} geo - Геолокация
 */
interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}

/**
 * @desc Интерфейс компании
 *
 * @prop {string} name - Название
 * @prop {string} catchPhrase - Псевдоним
 * @prop {string} bs - Бизнес
 */
interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

/**
 * @desc Интерфейс пользователя
 *
 * @prop {number} id - ID
 * @prop {string} name - Имя
 * @prop {string} username - Псевдоним
 * @prop {string} email - Email
 * @prop {Address} address - Адрес
 * @prop {string} phone - Телефон
 * @prop {string} website - Сайт
 * @prop {Company} company - Название компании
 *
 */
export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}
