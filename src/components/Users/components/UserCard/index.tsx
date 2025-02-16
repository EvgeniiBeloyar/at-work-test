import { ReactElement } from 'react';
import { Dropdown } from 'Common/components';
import { User } from 'Store/models';
import styles from './UserCard.module.scss';
import { EDropdownOptions } from 'Common/enums/dropdownOptions';

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
	const options = archive
		? [EDropdownOptions.TO_ACTIVE]
		: [EDropdownOptions.TO_EDIT, EDropdownOptions.TO_ARCHIVE, EDropdownOptions.TO_HIDE];

	return (
		<div className={`${styles.card} ${archive ? styles.archive : ''} ${className}`}>
			<div className={styles.dropdownWrapper}>
				<Dropdown options={options} userId={user.id} />
			</div>
			<div className={styles.inner}>
				<div className={styles.avatar}>
					<img src="/avatar.jpeg" alt={user.name} />
				</div>
				<div className={styles.info}>
					<p className={styles.name}>{user.name}</p>
					<p className={styles.company}>{user.company.name}</p>
					<p className={styles.city}>{user.address.city}</p>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
