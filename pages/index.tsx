import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import Aside from 'components/Aside';
import AsyncBoundary from 'utils/AsyncBoundary';
import AsyncFallback from 'components/AsyncFallback';

const Home = () => {
	return (
		<div className="flex-center">
			<div>
				<AsyncBoundary
					pendingFallback={<AsyncFallback type="header" state="Loading" />}
					rejectedFallback={<AsyncFallback type="header" state="Error" />}
				>
					<Header />
				</AsyncBoundary>

				<AsyncBoundary
					pendingFallback={<AsyncFallback type="main" state="Loading" />}
					rejectedFallback={<AsyncFallback type="main" state="Error" />}
				>
					<Main />
				</AsyncBoundary>

				<AsyncBoundary
					pendingFallback={<AsyncFallback type="footer" state="Loading" />}
					rejectedFallback={<AsyncFallback type="footer" state="Error" />}
				>
					<Footer />
				</AsyncBoundary>
			</div>

			<AsyncBoundary
				pendingFallback={<AsyncFallback type="aside" state="Loading" />}
				rejectedFallback={<AsyncFallback type="aside" state="Error" />}
			>
				<Aside />
			</AsyncBoundary>
		</div>
	);
};

export default Home;
