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
						value: "#38bdf8",
					},
				},
			},
		},
	},
	globalCss: {
		extend: {
			body: {
				bg: "slate.950",
				color: "slate.50",
			},
		},
	},
	outdir: "styled-system",
	jsxFramework: "react",
});
