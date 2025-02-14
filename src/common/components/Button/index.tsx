import { ComponentPropsWithoutRef, ReactElement } from 'react';
import styles from './Button.module.scss';

/**
 * @desc Интерфейс компонента кнопки.
 *
 * @prop {ReactElement | string} children - Контент.
 * @prop {string} className - Css-класс.
 */
interface IProps extends ComponentPropsWithoutRef<'button'> {
	children: ReactElement | string;
	className?: string;
}

/** Компонент кнопки */
const Button = ({ children, className, ...props }: IProps): ReactElement => {
	return (
		<button type="button" className={`${styles.button} ${className}`} {...props}>
			{children}
		</button>
	);
};

export default Button;
