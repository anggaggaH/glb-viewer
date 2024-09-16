import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, IconButton } from '@mui/material';

import BaseInputValidation from './BaseInputValidation';

export default function BaseInputPassword({ name, label, control, errors }) {
	const [values, setValues] = useState({ showPassword: false });

    const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
    };
    const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	return (
		<BaseInputValidation
			control={control}
			name={name}
			label={label}
			errors={errors}
			config={{ type: values.showPassword ? 'text' : 'password' }}
			InputProps={{
				endAdornment: (
					<InputAdornment position='end'>
						<IconButton
							aria-label='toggle password visibility'
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge='end'
						>
							{values.showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
}
