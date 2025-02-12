import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

/** Компонент шаблона */
const Layout = (): ReactElement => {
	return (
		<>
			<div>header</div>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
