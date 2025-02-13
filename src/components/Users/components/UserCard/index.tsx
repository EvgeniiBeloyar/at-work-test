import { ReactElement } from 'react';
import { Dropdown } from 'Common/components';
import { Link } from 'react-router-dom';
import styles from './UserCard.module.scss';

/**
 * @desc Интерфейс компонента корточки пользователя.
 *
 * @prop {boolean} archive - Пользователь в архиве
 * @prop {string} className - Css-класс.
 */
interface IProps {
	archive?: boolean;
	className?: string;
}

/** Компонент карточки пользователя  */
const UserCard = ({ archive, className }: IProps): ReactElement => {
	const options = ['Редактировать', 'Архивировать', 'Скрыть'];

	return (
		<div className={`${styles.card} ${archive ? styles.archive : ''} ${className}`}>
			<div className={styles.dropdownWrapper}>
				<Dropdown options={options} />
			</div>
			<Link to="/profile" className={styles.inner}>
				<div className={styles.avatar}>
					<img src="/avatar.jpeg" alt="Фото" />
				</div>
				<div className={styles.info}>
					<p className={styles.name}>Ivan1234</p>
					<p className={styles.company}>At-Work</p>
					<p className={styles.city}>Санкт-Петербург</p>
				</div>
			</Link>
		</div>
	);
};

export default UserCard;
