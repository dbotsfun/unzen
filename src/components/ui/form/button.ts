import { type RecipeVariantProps, cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";

export const button = cva({
	base: {
		alignItems: "center",
		display: "inline-flex",
		gap: 2,
		justifyContent: "center",
		position: "relative",
		whiteSpace: "nowrap",
		borderRadius: "lg",
		cursor: "pointer",
		transitionDuration: "fast",
		fontWeight: 600,
		w: "fit",
		_disabled: {
			opacity: 0.5,
			cursor: "not-allowed",
			pointerEvents: "none",
		},
		userSelect: "none",
	},
	variants: {
		variant: {
			primary: {
				bg: {
					base: "brand",
					_hover: "brand/90",
					_active: "brand/80",
				},
				color: "gray.950",
			},
			secondary: {
				bg: {
					base: "gray.900",
					_hover: "gray.800",
					_active: "gray.700",
				},
				color: "white",
			},
		},
		size: {
			sm: {
				h: 9,
				px: 4,
				py: 2,
			},
			md: {
				h: 10,
				px: 4,
				py: 1,
			},
			lg: {
				h: 11,
				px: 6,
				py: 4,
				fontSize: "lg",
			},
			xl: {
				h: 12,
				px: 8,
				py: 5,
				fontSize: "lg",
			},
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
});

export type ButtonVariants = RecipeVariantProps<typeof button>;

export const Button = styled("button", button);
