import { STYLES } from 'Common/consts';
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import styles from './UserEdit.module.scss';
import { TRANSLATE } from './i18';
import { Button, Categories, Input, Loader } from 'Common/components';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from 'Store/users.slice';
import { fetchUserById } from './services';
import { validateForm } from './utils';
import { IFormData } from './models';
import { setActivePopup } from 'Store/app.slice';
import { EUserFormFields } from './Enums';

/** Компонент редактирования пользователя */
const UserEdit = (): ReactElement => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams();
	const [form, setForm] = useState<IFormData>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [errors, setErrors] = useState<Partial<IFormData>>({});

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
	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();

		const newErrors = validateForm(form);

		setErrors(newErrors);

		/** Проверяем есть ли ошибки */
		if (Object.keys(newErrors).length > 0) {
			return;
		}

		if (form) {
			/** Обновляем данные пользователя */
			dispatch(updateUser({ id: Number(id), formData: form }));
			/** Показываем попап */
			dispatch(setActivePopup(true));
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
					[EUserFormFields.NAME]: data.name,
					[EUserFormFields.NICKNAME]: data.username,
					[EUserFormFields.EMAIL]: data.email,
					[EUserFormFields.CITY]: data.address.city,
					[EUserFormFields.PHONE]: data.phone,
					[EUserFormFields.COMPANY]: data.company.name,
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
			<div className={styles.back}>
				<button type="button" className={styles.backButton} onClick={goBackHandler}>
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
			{isLoading && <Loader position="fixed" />}
			{!isLoading && (
				<>
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
										label={TRANSLATE.LABELS[EUserFormFields.NAME]}
										placeholder={TRANSLATE.PLACEHOLDERS[EUserFormFields.NAME]}
										name={EUserFormFields.NAME}
										value={form.name}
										onChange={handleChange}
										onClear={() => handleClear(EUserFormFields.NAME)}
										error={errors.name}
									/>
									<Input
										label={TRANSLATE.LABELS[EUserFormFields.NICKNAME]}
										placeholder={TRANSLATE.PLACEHOLDERS[EUserFormFields.NICKNAME]}
										name={EUserFormFields.NICKNAME}
										value={form.nickname}
										onChange={handleChange}
										onClear={() => handleClear(EUserFormFields.NICKNAME)}
										error={errors.nickname}
									/>
									<Input
										label={TRANSLATE.LABELS[EUserFormFields.EMAIL]}
										placeholder={TRANSLATE.PLACEHOLDERS[EUserFormFields.EMAIL]}
										name={EUserFormFields.EMAIL}
										type="email"
										value={form.email}
										onChange={handleChange}
										onClear={() => handleClear(EUserFormFields.EMAIL)}
										error={errors.email}
									/>
									<Input
										label={TRANSLATE.LABELS[EUserFormFields.CITY]}
										placeholder={TRANSLATE.PLACEHOLDERS[EUserFormFields.CITY]}
										name={EUserFormFields.CITY}
										value={form.city}
										onChange={handleChange}
										onClear={() => handleClear(EUserFormFields.CITY)}
										error={errors.city}
									/>
									<Input
										type="tel"
										label={TRANSLATE.LABELS[EUserFormFields.PHONE]}
										placeholder={TRANSLATE.PLACEHOLDERS[EUserFormFields.PHONE]}
										name={EUserFormFields.PHONE}
										value={form.phone}
										onChange={handleChange}
										onClear={() => handleClear(EUserFormFields.PHONE)}
										error={errors.phone}
									/>
									<Input
										label={TRANSLATE.LABELS[EUserFormFields.COMPANY]}
										placeholder={TRANSLATE.PLACEHOLDERS[EUserFormFields.COMPANY]}
										name={EUserFormFields.COMPANY}
										value={form.company}
										onChange={handleChange}
										onClear={() => handleClear(EUserFormFields.COMPANY)}
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
