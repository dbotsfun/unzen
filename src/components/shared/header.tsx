import { css, cx } from "@/styled-system/css";
import { Container, Flex } from "@/styled-system/jsx";
import { Heading } from "../ui/heading";
import { boxStyle } from "../ui/styles/box";
import { Button } from "../ui/button";

export default function Header() {
	return (
		<Container py={4}>
			<header
				className={cx(
					boxStyle,
					css({
						top: 0,
						position: "sticky",
						w: "full",
					}),
				)}
			>
				<Flex justifyContent={"space-between"} alignItems={"center"}>
					<Heading>dbots.fun</Heading>
					<Flex>
						<Button>Login</Button>
					</Flex>
				</Flex>
			</header>
		</Container>
	);
}
