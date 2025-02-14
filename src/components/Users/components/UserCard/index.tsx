import { ReactElement } from 'react';
import { Dropdown } from 'Common/components';
import { Link } from 'react-router-dom';
import { User } from 'Store/models';
import { ROUTES } from 'Common/consts';
import styles from './UserCard.module.scss';

/**
 * @desc Интерфейс компонента корточки пользователя.
 *
 * @prop {User} user - Объект пользователя
 * @prop {boolean} archive - Пользователь в архиве
 * @prop {string} className - Css-класс.
 */
interface IProps {
	user: User;
	archive?: boolean;
	className?: string;
}

/** Компонент карточки пользователя  */
const UserCard = ({ user, archive, className }: IProps): ReactElement => {
	const options = archive ? ['Активировать'] : ['Редактировать', 'Архивировать', 'Скрыть'];

	return (
		<div className={`${styles.card} ${archive ? styles.archive : ''} ${className}`}>
			<div className={styles.dropdownWrapper}>
				<Dropdown options={options} userId={user.id} />
			</div>
			<Link to={`${ROUTES.PROFILE}/${user.id}`} className={styles.inner}>
				<div className={styles.avatar}>
					<img src="/avatar.jpeg" alt={user.name} />
				</div>
				<div className={styles.info}>
					<p className={styles.name}>{user.name}</p>
					<p className={styles.company}>{user.company.name}</p>
					<p className={styles.city}>{user.address.city}</p>
				</div>
			</Link>
		</div>
	);
};

export default UserCard;
