import { ReactElement } from 'react';
import styles from './Loader.module.scss';
/**
 * @desc Интерфейс компонента лоадера.
 *
 * @prop {'absolute' | 'fixed'} position - Позиция.
 * @prop {string} className - Css-класс.
 */
interface IProps {
	position: 'absolute' | 'fixed';
	className?: string;
}

/** Компонент лоадера */
const Loader = ({ position, className }: IProps): ReactElement => {
	return (
		<div className={`${styles.wrapper} ${styles[position]} ${className}`}>
			<span className={styles.loader}></span>
		</div>
	);
};

export default Loader;
