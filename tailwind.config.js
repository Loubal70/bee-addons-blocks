/** @type {import('tailwindcss').Config} */
module.exports = {
	important: '#bee-addons-blocks-wrapper',
	content: [
		"./src/**/*.js",
		"./templates/**/*.php",
		"./classes/**/*.php"
	],
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
		},
	},
}
