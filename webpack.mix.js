const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
	.js('src/assets/js/admin.js', 'dist/js')
	.setPublicPath('dist')
	.react();

mix
	.sass('src/assets/scss/admin.scss', 'dist/css')
	.setPublicPath('dist')

mix
	.options({
		processCssUrls: false,
		postCss: [tailwindcss('./tailwind.config.js')],
	});
