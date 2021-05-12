module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: {
				turquiseLight: '#38BDC8',
				turquiseDark: '#02A4B1',
			}
		},
	},
	plugins: [],
};
