import { Backspace } from '@mui/icons-material';
import { twMerge } from 'tailwind-merge';

export default function BaseNumPad(props) {
	const { onAddValue, setNominal, nominal, className = '', callbackBackspace = {} } = props;
	return (
		<div className={twMerge('flex flex-col w-full gap-1', className)}>
			<div className='grid grid-cols-3 gap-1'>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
					return (
						<button key={n} className='btn-num-pad' onClick={() => onAddValue(n)}>
							{n}
						</button>
					);
				})}
			</div>

			<div className='grid grid-cols-3 gap-1'>
				<button className='btn-num-pad' onClick={() => setNominal(null)}>
					C
				</button>
				<button className='btn-num-pad' onClick={() => onAddValue(0)}>
					0
				</button>
				<button
					className='btn-num-pad'
					onClick={() => {
						if (nominal) {
							const newN = String(nominal).slice(0, -1);
							setNominal(newN);
							if (callbackBackspace && typeof callbackBackspace === 'function') {
								callbackBackspace(newN);
							}
						}
					}}
				>
					<Backspace />
				</button>
			</div>
			{props.config?.withThousand && (
				<div className='grid grid-cols-2 gap-1'>
					{['00', '000'].map((n) => {
						return (
							<button key={n} className='btn-num-pad' onClick={() => onAddValue(n)}>
								{n}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
}
