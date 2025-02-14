/** Получение пользователя */
export const fetchUserById = async (id: string) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	return response.json();
};
