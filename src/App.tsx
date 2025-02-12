import { Button, Categories, Input } from 'Common/components';
import './scss/main.scss';
import { useState } from 'react';

function App() {
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
			<h1>AT-WORK</h1>
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
		</>
	);
}

export default App;
