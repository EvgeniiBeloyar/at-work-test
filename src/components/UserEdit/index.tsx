import { STYLES } from 'Common/consts';
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import styles from './UserEdit.module.scss';
import { TRANSLATE } from './i18';
import { Button, Categories, Input } from 'Common/components';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser, useUsersSelector } from 'Store/users.slice';
import { fetchUserById } from './services';
import { validateForm } from './utils';
import { IFormData } from './models';

/** Компонент редактирования пользователя */
const UserEdit = (): ReactElement => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams();
	const [form, setForm] = useState<IFormData>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [errors, setErrors] = useState<Partial<IFormData>>({});
	const { activeUsers } = useUsersSelector();

	console.log(`form`, form);
	console.log(`errors`, errors);
	console.log(`activeUsers`, activeUsers);

	/** Обработчик нажатия кнопки "Назад" */
	const goBackHandler = (): void => {
		navigate(-1);
	};

	/** Обработчик изменения инпута */
	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	/** Обработчик очистки инпута */
	const handleClear = (field: keyof typeof form): void => {
		setForm({ ...form, [field]: '' });
	};

	/** Обработчик отправки */
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const newErrors = validateForm(form);

		setErrors(newErrors);

		/** Проверяем есть ли ошибки */
		if (Object.keys(newErrors).length > 0) {
			return;
		}

		if (form) {
			dispatch(updateUser({ id: Number(id), formData: form }));
		}
	};

	/** Получение данных пользователя по id */
	useEffect(() => {
		if (!id) {
			return;
		}

		setIsLoading(true);

		const fetchUser = async () => {
			try {
				const data = await fetchUserById(id);
				setForm({
					name: data.name,
					nickname: data.username,
					email: data.email,
					city: data.address.city,
					phone: data.phone,
					company: data.company.name,
				});
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchUser();
	}, [id]);

	return (
		<div className={`${STYLES.container} ${styles.wrapper}`}>
			{isLoading && <h2>Загрузка...</h2>}
			{!isLoading && (
				<>
					<div className={styles.back}>
						<button type="button" className={styles.backButton} onClick={goBackHandler}>
							<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
								<path
									d="M11.25 12H0.75"
									stroke="#161616"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
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
								<img src="/avatar.jpeg" alt={form.name} />
							</div>
							<Categories className={styles.categories} />
						</div>
						<div className={styles.main}>
							<h2 className={STYLES.title}>{TRANSLATE.PROFILE}</h2>
							<form className={styles.form} onSubmit={handleSubmit}>
								<div className={styles.inputs}>
									<Input
										label="Имя"
										placeholder="Введите имя"
										name="name"
										value={form.name}
										onChange={handleChange}
										onClear={() => handleClear('name')}
										error={errors.name}
									/>
									<Input
										label="Никнейм"
										placeholder="Введите никнейм"
										name="nickname"
										value={form.nickname}
										onChange={handleChange}
										onClear={() => handleClear('nickname')}
										error={errors.nickname}
									/>
									<Input
										type="email"
										label="Почта"
										placeholder="Введите email"
										name="email"
										value={form.email}
										onChange={handleChange}
										onClear={() => handleClear('email')}
										error={errors.email}
									/>
									<Input
										label="Город"
										placeholder="Введите город"
										name="city"
										value={form.city}
										onChange={handleChange}
										onClear={() => handleClear('city')}
										error={errors.city}
									/>
									<Input
										type="tel"
										label="Телефон"
										placeholder="Введите телефон"
										name="phone"
										value={form.phone}
										onChange={handleChange}
										onClear={() => handleClear('phone')}
										error={errors.phone}
									/>
									<Input
										label="Название компании"
										placeholder="Введите название компании"
										name="company"
										value={form.company}
										onChange={handleChange}
										onClear={() => handleClear('company')}
										error={errors.company}
									/>
								</div>
								<Button type="submit" className={styles.button}>
									{TRANSLATE.TO_SAVE}
								</Button>
							</form>
						</div>
					</section>
				</>
			)}
		</div>
	);
};

export default UserEdit;
