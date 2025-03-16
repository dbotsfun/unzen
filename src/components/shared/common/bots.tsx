import { Heading } from "@/components/ui/text/heading";
import { Container, Stack } from "@styled-system/jsx";
import type { PropsWithChildren } from "react";

interface BotsProps extends PropsWithChildren {
	title: string;
}

export default function Bots({ children, title }: BotsProps) {
	return (
		<Container w="full">
			<Stack>
				<Heading>{title}</Heading>
				{children}
			</Stack>
		</Container>
	);
}
