import { Route, Routes } from 'react-router-dom';
import './scss/main.scss';
import Layout from 'Components/Layout';
import { ROUTES } from 'Common/consts';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<>тут главная</>} />
				<Route path={ROUTES.PROFILE} element={<>тут профиль</>} />
				<Route path={ROUTES.PROFILE_ID} element={<>тут профиль</>} />
			</Route>
		</Routes>
	);
}

export default App;
