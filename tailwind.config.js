/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				bz: {
					green: '#2c6d47',
					greenLight: '#7ac48d',
					orange: '#f16b26',
					orangeLight: '#ff9d6c',
					red: '#b0373d',
					'green-700': 'rgba(44, 109, 71, 0.7)',
					default: '#f4f1ec',
					appDefault: '#e1e1e1',
					metallicYellow: '#fac710',
					rose: '#99636d',
					ube: '#8e7dbe ',
				},
			},
		},
	},
	plugins: [],
};
