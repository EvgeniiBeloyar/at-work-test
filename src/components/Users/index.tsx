import { STYLES } from 'Common/consts';
import { ReactElement, useEffect } from 'react';
import styles from './Users.module.scss';
import UserCard from './components/UserCard';
import { TRANSLATE } from './i18';
import { fetchUsers, useUsersSelector } from 'Store/users.slice';
import { useAppDispatch } from 'Common/hooks';

// TODO: стилизовать ошибку/лоадинг - сделать лоадер
/** Компонент списка пользователей */
const Users = (): ReactElement => {
	const dispatch = useAppDispatch();
	const { activeUsers, archivedUsers, isLoading, error } = useUsersSelector();

	/** Получение списка пользователей */
	useEffect(() => {
		// TODO: вынести в const
		const usersLimit = 6;
		dispatch(fetchUsers({ usersLimit }));
		// eslint-disable-next-line
	}, []);

	return (
		<div className={`${STYLES.container} ${styles.wrapper}`}>
			{isLoading && <div>Loading...</div>}
			{error && <div>Error</div>}
			{!isLoading && !error && (
				<>
					<section className={styles.section}>
						<h2 className={STYLES.title}>{TRANSLATE.ACTIVE}</h2>
						<div className={styles.grid}>
							{activeUsers.map(user => (
								<UserCard key={user.id} user={user} />
							))}
						</div>
					</section>
					<section className={styles.section}>
						<h2 className={STYLES.title}>{TRANSLATE.ARCHIVE}</h2>
						<div className={styles.grid}>
							{archivedUsers.map(user => (
								<UserCard key={user.id} user={user} archive={true} />
							))}
						</div>
					</section>
				</>
			)}
		</div>
	);
};

export default Users;
