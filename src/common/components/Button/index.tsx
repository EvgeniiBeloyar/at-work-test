import { ReactElement } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

/**
 * @desc Интерфейс компонента кнопки.
 *
 * @prop {ReactElement | string} children - Контент.
 * @prop {string} className - Css-класс.
 */
interface IProps {
	children: ReactElement | string;
	className?: string;
}

/** Компонент кнопки */
const Button = ({ children, className, ...props }: IProps): ReactElement => {
	return (
		<button type="button" className={cn(styles.button, className)} {...props}>
			{children}
		</button>
	);
};

export default Button;
