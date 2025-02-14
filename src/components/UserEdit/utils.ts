import { TRANSLATE } from './i18';
import { IFormData } from './models';

/** Функция валидации */
export const validateForm = (form: IFormData) => {
	const newErrors: Partial<IFormData> = {};
	Object.keys(form).forEach(key => {
		if (!form[key as keyof IFormData]) {
			newErrors[key as keyof IFormData] = TRANSLATE.VALIDATE_FORM;
		}
	});
	return newErrors;
};
