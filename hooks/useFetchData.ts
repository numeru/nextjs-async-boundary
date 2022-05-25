import { useEffect, useState } from 'react';

const useFetchData = (type: string) => {
	const [data, setData] = useState('');

	const fetchData = async () => {
		const { value } = await fetch(`https://9b4dba76-6a54-4a4b-8f4d-fb42a09ea4a3.mock.pstmn.io/${type}`).then((result) =>
			result.json(),
		);
		setData(value);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return data;
};

export default useFetchData;
