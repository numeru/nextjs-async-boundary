import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import Aside from 'components/Aside';

const Home = () => {
	return (
		<div
			style={{
				display: 'flex',
			}}
		>
			<div>
				<Header />
				<Main />
				<Footer />
			</div>

			<Aside />
		</div>
	);
};

export default Home;
