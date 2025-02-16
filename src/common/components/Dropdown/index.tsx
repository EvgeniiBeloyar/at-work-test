import { ReactElement, useState } from 'react';
import styles from './Dropdown.module.scss';
import { useAppDispatch, useMatchMedia, useOutsideClick } from 'Common/hooks';
import { moveToActive, moveToArchive, removeUser } from 'Store/users.slice';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'Common/consts';
import { EDropdownOptions } from 'Common/enums/dropdownOptions';
import { TRANSLATE as TRANSLATE_GLOBAL } from 'Common/I18';

/**
 * @desc Интерфейс компонента выпадающего списка.
 *
 * @prop {EDropdownOptions[]} options - Опции для выпадающего списка.
 * @prop {number} userId - ID пользователя.
 * @prop {string} className - Css-класс.
 */
interface IProps {
	options: EDropdownOptions[];
	userId: number;
	className?: string;
}

/** Компонент выпадающего списка */
const Dropdown = ({ options, userId, className }: IProps): ReactElement => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { isMobile } = useMatchMedia();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	/** Обработчик открытия/закрытия выпадающего списка */
	const toggleDropdown = (): void => {
		setIsOpen(!isOpen);
	};

	/** Обработчик клика вне выпадающего списка */
	const handleClickOutside = (): void => {
		if (!isOpen) {
			return;
		}
		setIsOpen(false);
	};

	const dropdownRef = useOutsideClick(handleClickOutside);

	/** Обработчик нажатия кнопки */
	const handleSelected = (option: EDropdownOptions): void => {
		switch (option) {
			// Переход на страницу редактирования пользователя
			case EDropdownOptions.TO_EDIT:
				navigate(`${ROUTES.PROFILE}/${userId}`);
				break;
			// Архивируем пользователя
			case EDropdownOptions.TO_ARCHIVE:
				dispatch(moveToArchive(userId));
				break;
			case EDropdownOptions.TO_HIDE:
				// Скрываем пользователя
				dispatch(removeUser(userId));
				break;
			case EDropdownOptions.TO_ACTIVE:
				// Активируем пользователя
				dispatch(moveToActive(userId));
				break;
		}
		toggleDropdown();
	};
	return (
		<div ref={dropdownRef} className={`${styles.dropdown} ${className}`}>
			<button className={styles.trigger} onClick={toggleDropdown}>
				{!isMobile && (
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<g clipPath="url(#clip0_10_6608)">
							<path
								d="M10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16C10.9 16 10 16.9 10 18ZM10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z"
								fill="#161616"
							/>
						</g>
						<defs>
							<clipPath id="clip0_10_6608">
								<rect width="24" height="24" fill="white" />
							</clipPath>
						</defs>
					</svg>
				)}

				{isMobile && (
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
						<g clipPath="url(#clip0_28_7878)">
							<path
								d="M11 15.25C11 15.9375 11.5625 16.5 12.25 16.5C12.9375 16.5 13.5 15.9375 13.5 15.25C13.5 14.5625 12.9375 14 12.25 14C11.5625 14 11 14.5625 11 15.25ZM11 7.75C11 8.4375 11.5625 9 12.25 9C12.9375 9 13.5 8.4375 13.5 7.75C13.5 7.0625 12.9375 6.5 12.25 6.5C11.5625 6.5 11 7.0625 11 7.75ZM11 11.5C11 12.1875 11.5625 12.75 12.25 12.75C12.9375 12.75 13.5 12.1875 13.5 11.5C13.5 10.8125 12.9375 10.25 12.25 10.25C11.5625 10.25 11 10.8125 11 11.5Z"
								fill="#161616"
							/>
						</g>
						<defs>
							<clipPath id="clip0_28_7878">
								<rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
							</clipPath>
						</defs>
					</svg>
				)}
			</button>
			<div className={`${styles.body} ${isOpen ? styles.open : ''}`}>
				<div className={styles.inner}>
					<ul className={styles.list}>
						{options.map(option => (
							<li key={option} className={styles.item}>
								<button type="button" onClick={() => handleSelected(option)}>
									{TRANSLATE_GLOBAL[option]}
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
