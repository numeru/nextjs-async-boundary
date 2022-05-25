import useFetchData from 'hooks/useFetchData';
import style from './style.module.css';

const Aside = () => {
	const asideData = useFetchData('aside');

	return (
		<aside className={`aside flex-center ${asideData && style.active}`}>
			<button type="button" onClick={() => console.log(asideData)}>
				{asideData}
			</button>
		</aside>
	);
};

export default Aside;
