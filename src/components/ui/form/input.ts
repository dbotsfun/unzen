import { type RecipeVariantProps, cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";

export const input = cva({
	base: {
		transitionDuration: "normal",
		outline: "none",
		px: 3,
		py: 2,
		borderRadius: "lg",
		bg: {
			base: "slate.900",
			_hover: "slate.800",
		},
		_placeholder: {
			color: "slate.400",
			fontStyle: "italic",
		},
	},
	variants: {
		size: {
			sm: { px: 2, py: 1, textStyle: "sm" },
			md: { px: 3, py: 2, textStyle: "base" },
			lg: { px: 4, py: 3, textStyle: "lg" },
			xl: { px: 5, py: 4, textStyle: "xl" },
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type InputVariants = RecipeVariantProps<typeof input>;

export const Input = styled("input", input);
