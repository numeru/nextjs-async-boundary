import useFetchData from 'hooks/useFetchData';
import style from './style.module.css';

const Header = () => {
	const headerData = useFetchData('header');

	return (
		<header className={`header flex-center ${headerData && style.active}`}>
			<button type="button" onClick={() => console.log(headerData)}>
				{headerData}
			</button>
		</header>
	);
};

export default Header;
