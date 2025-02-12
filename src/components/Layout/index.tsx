import Header from 'Components/Header';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

/** Компонент шаблона */
const Layout = (): ReactElement => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
