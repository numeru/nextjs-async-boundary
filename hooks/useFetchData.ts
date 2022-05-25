import { useQuery } from 'react-query';

const useFetchData = (type: string) => {
	const fetchData = async () => {
		const { value } = await fetch(`/api/${type}`).then((result) => result.json());

		return value;
	};

	const { data } = useQuery(`${type}Data`, fetchData, {
		onError: () => {
			console.log('error');
			throw new Error(`${type} data error`);
		},
	});

	return data;
};

export default useFetchData;
