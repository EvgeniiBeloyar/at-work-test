import { STYLES } from 'Common/consts';
import { ReactElement, useState } from 'react';
import styles from './UserEdit.module.scss';
import { TRANSLATE } from './i18';
import { Button, Categories, Input } from 'Common/components';

// TODO: Заголовок вынести или в компонент или стили в миксин или класс
// TODO: сделать интерфейс
/** Компонент редактирования пользователя */
const UserEdit = (): ReactElement => {
	const [form, setForm] = useState({
		name: '',
		nickname: '',
		email: '',
		city: '',
		phone: '',
		company: '',
	});

	/** Обработчик изменения инпута */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	/** Обработчик очистки инпута */
	const handleClear = (field: keyof typeof form): void => {
		setForm({ ...form, [field]: '' });
	};
	return (
		<div className={`${STYLES.container} ${styles.wrapper}`}>
			<div className={styles.back}>
				<button type="button" className={styles.backButton}>
					<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
						<path d="M11.25 12H0.75" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<path
							d="M6 17.25L0.75 12L6 6.75"
							stroke="#161616"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<p>{TRANSLATE.BACK}</p>
				</button>
			</div>
			<section className={styles.inner}>
				<div className={styles.nav}>
					<div className={styles.avatar}>
						<img src="/avatar.jpeg" alt="Аватар" />
					</div>
					<Categories className={styles.categories} />
				</div>
				<div className={styles.main}>
					<h2 className={styles.title}>{TRANSLATE.PROFILE}</h2>
					<form className={styles.form}>
						<div className={styles.inputs}>
							<Input
								label="Имя"
								placeholder="Введите имя"
								name="name"
								value={form.name}
								onChange={handleChange}
								onClear={() => handleClear('name')}
							/>
							<Input
								label="Никнейм"
								placeholder="Введите никнейм"
								name="nickname"
								value={form.nickname}
								onChange={handleChange}
								onClear={() => handleClear('nickname')}
							/>
							<Input
								type="email"
								label="Почта"
								placeholder="Введите email"
								name="email"
								value={form.email}
								onChange={handleChange}
								onClear={() => handleClear('email')}
							/>
							<Input
								label="Город"
								placeholder="Введите город"
								name="city"
								value={form.city}
								onChange={handleChange}
								onClear={() => handleClear('city')}
							/>
							<Input
								type="tel"
								label="Телефон"
								placeholder="Введите телефон"
								name="phone"
								value={form.phone}
								onChange={handleChange}
								onClear={() => handleClear('phone')}
							/>
							<Input
								label="Название компании"
								placeholder="Введите название компании"
								name="city"
								value={form.company}
								onChange={handleChange}
								onClear={() => handleClear('company')}
							/>
						</div>
						<Button className={styles.button}>Сохранить</Button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default UserEdit;
