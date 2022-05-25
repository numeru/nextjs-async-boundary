import useFetchData from 'hooks/useFetchData';
import style from './style.module.css';

const Footer = () => {
	const footerData = useFetchData('footer');

	return (
		<footer className={`footer flex-center ${footerData && style.active}`}>
			<button type="button" onClick={() => console.log(footerData)}>
				{footerData}
			</button>
		</footer>
	);
};

export default Footer;
