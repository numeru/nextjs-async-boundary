import useFetchData from 'hooks/useFetchData';
import style from './style.module.css';

const Main = () => {
	const mainData = useFetchData('main');

	return <main className={style.main}>{mainData}</main>;
};

export default Main;
