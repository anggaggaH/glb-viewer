const nf = (number) => {
	return new Intl.NumberFormat('id-ID', {
		// style: 'decimal',
		// currency: 'IDR',
		minimumFractionDigits: 0,
		roundingIncrement: 1,
	}).format(number);
};

export default nf;
