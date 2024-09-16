import React from 'react';
import { NumericFormat } from 'react-number-format';

const BaseInputFormatNumber = React.forwardRef((props, ref) => {
	const { onChange, ...other } = props;

	return (
		<NumericFormat
			{...other}
			getInputRef={ref}
			onValueChange={(values) => {
				onChange({
					target: {
						name: props.name,
						value: values.value,
					},
				});
			}}
			thousandSeparator
			prefix=''
		/>
	);
});

export default BaseInputFormatNumber;
BaseInputFormatNumber.displayName = 'BaseInputFormatNumber';
