import { type RecipeVariantProps, cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";

export const text = cva({
	base: {
		fontWeight: "400",
		lineHeight: "1.25",
		letterSpacing: "0",
		textDecoration: "None",
		textTransform: "None",
		color: "slate.300",
	},
	variants: {
		size: {
			lg: {
				fontSize: "lg",
			},
			md: {
				fontSize: "md",
			},
			sm: {
				fontSize: "sm",
			},
		},
		variant: {
			link: {
				textDecoration: "underline",
				color: "slate.50",
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type TextVariants = RecipeVariantProps<typeof text>;

export const Text = styled("p", text);
