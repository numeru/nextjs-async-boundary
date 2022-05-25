import useFetchData from 'hooks/useFetchData';
import style from './style.module.css';

const Main = () => {
	const mainData = useFetchData('main');

	return (
		<main className={`main flex-center ${mainData && style.active}`}>
			<button type="button" onClick={() => console.log(mainData)}>
				{mainData}
			</button>
		</main>
	);
};

export default Main;
