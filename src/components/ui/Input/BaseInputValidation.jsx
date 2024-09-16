import { FormControl, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export default function BaseInputValidation({ control, name, label, errors, config = { type: '', styles: {}, classes: '', disabled: false, helperText: '' }, ...props }) {
  //* otherSetting should be put on CONFIG props as ONE object
  const { styles, classes, type, disabled, helperText } = config;
  return (
    <FormControl sx={styles} className={[classes ? classes : 'w-full'].join(' ')}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <TextField
            onBlur={onBlur}
            onChange={onChange}
            value={value || ''}
            inputRef={ref}
            label={label}
            size="small"
            type={type || 'text'}
            error={!!errors[name]?.message}
            helperText={errors[name]?.message || helperText}
            placeholder=""
            disabled={disabled}
            InputLabelProps={{ shrink: !!value }}
            {...props}
          />
        )}
      />
    </FormControl>
  );
}
