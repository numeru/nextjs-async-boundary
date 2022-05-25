import useFetchData from 'hooks/useFetchData';
import style from './style.module.css';

const Aside = () => {
	const asideData = useFetchData('aside');

	return <aside className={style.aside}>{asideData}</aside>;
};

export default Aside;
