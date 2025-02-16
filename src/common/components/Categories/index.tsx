import { ReactElement } from 'react';
import styles from './Category.module.scss';
import { Link } from 'react-router-dom';
import { ITEMS } from './const';

/**
 * @desc Интерфейс компонента категорий.
 *
 * @prop {string} className - Css-класс.
 */
interface IProps {
	className?: string;
}

/** Компонент категорий */
const Categories = ({ className }: IProps): ReactElement => {
	return (
		<ul className={`${styles.wrapper} ${className}`}>
			{ITEMS.map(({ slug, label }, index) => (
				<li key={label}>
					<Link to={slug} className={`${styles.categories} ${index === 0 ? styles.active : ''}`}>
						{label}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Categories;
