import { ReactElement } from 'react';
import styles from './Category.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { ITEMS } from './const';

/**
 * @desc Интерфейс компонента категорий.
 *
 * @prop {string} className - Css-класс.
 */
interface IProps {
	className?: string;
}

// TODO - продумать внутренни роутинг / и заблокировать текущую ссылку
/** Компонент категорий */
const Categories = ({ className }: IProps): ReactElement => {
	const { pathname } = useLocation();

	return (
		<ul className={`${styles.wrapper} ${className}`}>
			{ITEMS.map(({ slug, label }) => {
				const isActive = pathname.startsWith(slug);

				return (
					<li key={slug}>
						<Link to={slug} className={`${styles.categories} ${isActive ? styles.active : ''}`}>
							{label}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Categories;
