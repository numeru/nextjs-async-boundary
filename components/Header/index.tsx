import useFetchData from 'hooks/useFetchData';
import style from './style.module.css';

const Header = () => {
	const headerData = useFetchData('header');

	return <header className={style.header}>{headerData}</header>;
};

export default Header;
