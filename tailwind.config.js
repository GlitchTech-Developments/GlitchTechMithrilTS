/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: ["corporate", "black", "cyberpunk"],
	},
	plugins: [require("flowbite/plugin"), require("daisyui")],
};
