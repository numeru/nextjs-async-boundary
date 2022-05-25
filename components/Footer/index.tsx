import useFetchData from 'hooks/useFetchData';
import style from './style.module.css';

const Footer = () => {
	const footerData = useFetchData('footer');

	return <footer className={style.footer}>{footerData}</footer>;
};

export default Footer;
