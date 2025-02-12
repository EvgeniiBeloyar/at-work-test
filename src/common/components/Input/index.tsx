import { ChangeEvent, ComponentPropsWithoutRef, ReactElement } from 'react';
import styles from './Input.module.scss';
/**
 * @desc Интерфейс компонента Input.
 *
 * @prop {'text' | 'email' | 'number' | 'tel' | 'password' | 'search'} type - Тип.
 * @prop {string} label - Лейбл.
 * @prop {string} placeholder - Плейсхолдер.
 * @prop {string} name - Имя.
 * @prop {string} value - Значение.
 * @prop {string} error - Ошибка.
 * @prop {() => void} onClear - Обработчик очистки инпута.
 * @prop {(e: ChangeEvent<HTMLInputElement>) => void} onChange - Обработчик изменения значения инпута.
 * @prop {string} className - Css-класс.
 */
interface IProps extends ComponentPropsWithoutRef<'input'> {
	type?: 'text' | 'email' | 'number' | 'tel' | 'password' | 'search';
	label: string;
	placeholder: string;
	name: string;
	value: string;
	error?: string;
	onClear?: () => void;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

/** Компонент Input */
const Input = ({
	type = 'text',
	label,
	placeholder,
	name = 'name',
	value,
	error,
	onClear,
	onChange,
	className,
	...props
}: IProps): ReactElement => {
	return (
		<label className={`${styles.wrapper} ${className}`}>
			{label && <span className={styles.label}>{label}</span>}
			<div className={styles.inner}>
				<input
					className={styles.input}
					name={name}
					placeholder={placeholder}
					type={type}
					value={value}
					onChange={onChange}
					{...props}
				/>
				{value && (
					<button type="button" className={styles.clear} onClick={onClear}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16.0659 8.99469C16.3588 8.70179 16.3588 8.22692 16.0659 7.93403C15.773 7.64113 15.2981 7.64113 15.0052 7.93403L12 10.9392L8.99482 7.93403C8.70192 7.64113 8.22705 7.64113 7.93416 7.93403C7.64126 8.22692 7.64126 8.70179 7.93416 8.99469L10.9394 11.9999L7.93415 15.0051C7.64125 15.298 7.64125 15.7729 7.93415 16.0658C8.22704 16.3586 8.70191 16.3586 8.99481 16.0658L12 13.0605L15.0052 16.0658C15.2981 16.3586 15.773 16.3586 16.0659 16.0658C16.3588 15.7729 16.3588 15.298 16.0659 15.0051L13.0607 11.9999L16.0659 8.99469Z"
								fill="#161616"
							/>
						</svg>
					</button>
				)}
			</div>
			{error && <span className={styles.error}>{error}</span>}
		</label>
	);
};

export default Input;
