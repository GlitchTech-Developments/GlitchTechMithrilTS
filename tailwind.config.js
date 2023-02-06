/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: [
		"[data-theme='corporate']",
		"[data-theme='night']",
		"[data-theme='cyberpunk']",
	],
	content: ["./src/**/*"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: ["corporate", "night", "cyberpunk"],
	},
	plugins: [require("daisyui")],
};
