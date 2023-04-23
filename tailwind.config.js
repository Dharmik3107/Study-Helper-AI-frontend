/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		screens: {
			xs: "280px",
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			indigo: "#9381ff",
			periwinkle: "#b8b8ff",
			ghostWhite: "#f8f7ff",
			antiqueWhite: "#ffeedd",
			apricot: "#ffd8be",
			blackMagic: "#2e2d2b",
			darkGray: "#3b3b3b	",
		},
		fontFamily: {
			openSans: ["Open Sans", "sans-serif"],
			roboto: ["Roboto", "sans-serif"],
		},
		extend: {
			animation: {
				expand: "expand 500ms ease-in-out",
			},
		},
	},
	plugins: [],
};
