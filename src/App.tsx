import { Route, Routes } from 'react-router-dom';
import './scss/main.scss';
import Layout from 'Components/Layout';
import { ROUTES } from 'Common/consts';
import HomePage from 'Pages/HomePage';
import UserEditPage from 'Pages/UserEditPage';
import { lazy, Suspense } from 'react';

const PopupLazy = lazy(() => import('Components/Popup'));

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<HomePage />} />
					<Route path={ROUTES.PROFILE_ID} element={<UserEditPage />} />
				</Route>
			</Routes>

			<Suspense fallback={<></>}>
				<PopupLazy />
			</Suspense>
		</>
	);
}

export default App;
