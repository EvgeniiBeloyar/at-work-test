import { STYLES } from 'Common/consts';
import { ReactElement } from 'react';
import styles from './Users.module.scss';
import UserCard from './components/UserCard';
import { TRANSLATE } from './i18';

/** Компонент списка пользователей */
const Users = (): ReactElement => {
	const kek = ['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item'];

	return (
		<div className={`${STYLES.container} ${styles.wrapper}`}>
			<section className={styles.section}>
				<h2 className={STYLES.title}>{TRANSLATE.ACTIVE}</h2>
				<div className={styles.grid}>
					{kek.map((_, index) => (
						<UserCard key={index} />
					))}
				</div>
			</section>
			<section className={styles.section}>
				<h2 className={STYLES.title}>{TRANSLATE.ARCHIVE}</h2>
				<div className={styles.grid}>
					{kek.map((_, index) => (
						<UserCard key={index} archive={true} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Users;
