import { Route, Routes } from 'react-router-dom';
import './scss/main.scss';
import Layout from 'Components/Layout';
import { ROUTES } from 'Common/consts';
import HomePage from 'Pages/HomePage';
import UserEditPage from 'Pages/UserEditPage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<HomePage />} />
				<Route path={ROUTES.PROFILE} element={<>тут профиль</>} />
				<Route path={ROUTES.PROFILE_ID} element={<UserEditPage />} />
			</Route>
		</Routes>
	);
}

export default App;
