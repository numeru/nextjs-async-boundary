type Props = {
	type: string;
	state: string;
};

const AsyncFallback = ({ type, state }: Props) => {
	return <div className={`${type} flex-center border`}>{state}...</div>;
};

export default AsyncFallback;
