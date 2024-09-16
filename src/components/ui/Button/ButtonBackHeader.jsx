import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { twMerge } from 'tailwind-merge';

export default function ButtonBackHeader({className = ''}) {
	const navigate = useNavigate();
	return (
		<button onClick={() => navigate(-1)} className={twMerge('absolute z-10 top-4', className)}>
			<ArrowBack />
		</button>
	);
}
