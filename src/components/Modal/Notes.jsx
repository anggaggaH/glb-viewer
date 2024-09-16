import { Box, Modal } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import BaseInputValidation from '@/components/ui/Input/BaseInputValidation';
import ModalStyle from '@/constants/ModalStyle';

const schema = yup.object().shape({
	notes: yup.string(),
});

export default function Notes(props) {
    const { open, onClose, data } = props;
    const dispatch = useDispatch();

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			notes: data.notes || '',
		},
	});

	const onSubmit = (d) => {
        dispatch({ type: 'cart/setNotes', payload: { date: data.date, notes: d.notes} });
        onClose();
	};

	return (
		<Modal open={open} onClose={onClose} aria-labelledby='modal-notes' aria-describedby='modal-notes' className='w-full'>
			<Box sx={{...ModalStyle, top: '25%',}} className="flex flex-col gap-4 w-[90%] md:w-[360px]">
				<span className='font-bold text-center text-md'>Note</span>
				<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>
					<BaseInputValidation control={control} name='notes' label='' errors={errors} />
					<button className='ml-auto mr-0 bg-black btn-actions min-w-max' type='submit'>Save</button>
				</form>
			</Box>
		</Modal>
	);
}
