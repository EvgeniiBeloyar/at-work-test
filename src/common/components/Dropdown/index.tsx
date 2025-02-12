import { ReactElement, useState } from 'react';
import styles from './Dropdown.module.scss';
import { useOutsideClick } from 'Common/hooks';

/**
 * @desc Интерфейс компонента выпадающего списка.
 *
 * @prop {string[]} options - Опции для выпадающего списка
 * @prop {string} className - Css-класс.
 */
interface IProps {
	options: string[];
	className?: string;
}

// TODO: сделать tap для иконок - окрас svg в серый

/** Компонент выпадающего списка */
const Dropdown = ({ options }: IProps): ReactElement => {
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

	/** Обработчик нажатия кнопки */
	const handleSelected = (): void => {
		console.log('тут будет обработчик клика');
		toggleDropdown();
	};

	const dropdownRef = useOutsideClick(handleClickOutside);

	return (
		<div ref={dropdownRef} className={styles.dropdown}>
			<button className={styles.trigger} onClick={toggleDropdown}>
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
			</button>
			<div className={`${styles.body} ${isOpen ? styles.open : ''}`}>
				<div className={styles.inner}>
					<ul className={styles.list}>
						{options.map((option, index) => (
							<li key={index} className={styles.item}>
								<button type="button" onClick={handleSelected}>
									{option}
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
