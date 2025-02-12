import { useLayoutEffect, useState } from 'react';

const queries = ['(max-width: 767.98px)', '(min-width: 768px) and (max-width: 1199.98px)', '(min-width: 1200px)'];

interface IMediaQueryValues {
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
}

const useMatchMedia = (): IMediaQueryValues => {
	const isBrowser = typeof window !== 'undefined';
	const mediaQueryLists = isBrowser ? queries.map(query => matchMedia(query)) : null;
	const getValues = (): boolean[] => (mediaQueryLists ? mediaQueryLists.map(({ matches }) => matches) : []);

	const [values, setValues] = useState(getValues);

	useLayoutEffect(() => {
		const handler = (): void => setValues(getValues);

		mediaQueryLists?.forEach(list => list.addEventListener('change', handler));

		return (): void => {
			mediaQueryLists?.forEach(list => list.removeEventListener('change', handler));
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return ['isMobile', 'isTablet', 'isDesktop'].reduce(
		(acc, screen, index) => ({
			...acc,
			[screen]: values[index],
		}),
		{} as IMediaQueryValues,
	);
};

export default useMatchMedia;
