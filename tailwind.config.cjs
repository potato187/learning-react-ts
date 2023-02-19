/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Poppins'],
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('child-sibling', '&:checked + * > *');
		}),
	],
};
