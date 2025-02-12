import { Button, Categories, Dropdown, Input } from 'Common/components';
import './scss/main.scss';
import { useState } from 'react';

function App() {
	const options = ['Редактировать', 'Архивировать', 'Скрыть'];
	const [form, setForm] = useState({
		name: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleClear = (field: keyof typeof form) => {
		setForm({ ...form, [field]: '' });
	};
	return (
		<>
			<Button>Button</Button>
			<Categories />
			<div style={{ width: '420px' }}>
				<Input
					label="Имя"
					placeholder="Введите имя"
					name="name"
					value={form.name}
					onChange={handleChange}
					onClear={() => handleClear('name')}
				/>
			</div>
			<Dropdown options={options} />
		</>
	);
}

export default App;
