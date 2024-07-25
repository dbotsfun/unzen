import { css, cva } from "@/styled-system/css";
import { Box, styled } from "@/styled-system/jsx";

export const boxStyle = css({
	p: 4,
	rounded: "xl",
	bg: "bg.900",
	border: "1px solid",
	borderColor: "bg.800",
	boxShadow: "sm",
});

export const boxCva = cva({
	base: {
		p: 4,
		rounded: "xl",
		bg: "bg.900",
		border: "1px solid",
		borderColor: "bg.800",
		boxShadow: "sm",
	},
});

export const StyledBox = styled(Box, boxCva);
