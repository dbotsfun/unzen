import { type RecipeVariantProps, cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";

export const badge = cva({
	base: {
		alignItems: "center",
		display: "inline-flex",
		justifyContent: "center",
		position: "relative",
		whiteSpace: "nowrap",
		borderRadius: "md",
		fontWeight: 500,
		w: "fit",
		userSelect: "none",
		fontSize: "sm",
		px: 2,
		py: 0.5,
	},
	variants: {
		variant: {
			primary: {
				bg: {
					base: "brand/10",
				},
				color: "brand",
			},
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

export type BadgeVariants = RecipeVariantProps<typeof badge>;

export const Badge = styled("span", badge);
