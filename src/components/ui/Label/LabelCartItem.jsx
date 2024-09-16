import nf from '@/constants/nf';
import { twMerge } from 'tailwind-merge';

export default function LabelCartItem({ item, value1, value2, value3 }) {
	const voidStyle = item.is_void ? 'line-through' : '';
	return (
		<div className='carts items'>
			<span className={twMerge(voidStyle, 'break-words')}>{value1}</span>
			<span className={twMerge('text-left', voidStyle)}>{value2}</span>
			<span className={twMerge('text-right', voidStyle)}>{nf(value3)}</span>
		</div>
	);
}

export const LabelCartItemChild = ({ label, value }) => {
	return (
		<div className='carts items-child'>
			<span className='text-center'>{label}</span>
			<span className='text-right'>{value}</span>
		</div>
	);
};

export const LabelCartItemAdd = ({ label, value }) => {
	return (
		<div className='carts items'>
			<span></span>
			<span className='text-left'>{label}</span>
			<span className='text-right'>{value}</span>
		</div>
	);
};

export const LabelNotes = ({children, notes}) => {
	return (
		<div className='carts notes'>
			<span />
			{children}
			<span className='italic text-left'>{notes}</span>
		</div>
	);
};
