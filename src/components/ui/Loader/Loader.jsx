import { CircularProgress } from '@mui/material';

export default function Loader() {
	return (
		<div className='absolute z-10 top-1/2 left-1/2'>
			<CircularProgress color='success' />
		</div>
	);
}
