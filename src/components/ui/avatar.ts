import { type RecipeVariantProps, cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

export const avatar = cva({
	base: {
		w: 16,
		h: 16,
		rounded: "lg",
	},
});

export type AvatarVariants = RecipeVariantProps<typeof avatar>;

export const Avatar = styled("img", avatar);
