import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	preflight: true,
	include: [
		"./src/components/**/*.{ts,tsx,js,jsx}",
		"./src/app/**/*.{ts,tsx,js,jsx}",
	],
	exclude: [],
	theme: {
		extend: {
			tokens: {
				colors: {
					brand: {
						value: "#53eafd",
					},
				},
			},
		},
	},
	globalCss: {
		extend: {
			body: {
				bg: "gray.950",
				color: "gray.50",
			},
		},
	},
	outdir: "styled-system",
	jsxFramework: "react",
});
