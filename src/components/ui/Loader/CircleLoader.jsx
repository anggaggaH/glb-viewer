import { CircularProgress } from '@mui/material';
import { twMerge } from 'tailwind-merge';

export default function CircleLoader({ className, size = 18, sx = {} }) {
	return <CircularProgress className={twMerge('ml-2', className)} size={size} sx={{ color: 'var(--white)', ...sx }} />;
}
