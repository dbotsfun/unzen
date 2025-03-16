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
				color: "slate.950",
			},
			secondary: {
				bg: {
					base: "slate.900",
					_hover: "slate.800",
					_active: "slate.700",
				},
				color: "white",
			},
			link: {
				_hover: {
					opacity: 0.7,
					textDecoration: "underline",
				},
			},
		},
		size: {
			sm: {
				px: 2,
				py: 1,
				textStyle: "sm",
			},
			md: {
				px: 3,
				py: 2,
				textStyle: "base",
			},
			lg: {
				px: 4,
				py: 3,
				textStyle: "lg",
			},
			xl: {
				px: 5,
				py: 4,
				textStyle: "xl",
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
