import { Box, Container, HStack } from "@styled-system/jsx";
import { Heading } from "../../ui/text/heading";
import { Button } from "@/components/ui/form/button";
import { IconBrandDiscordFilled } from "@tabler/icons-react";

export default function Header() {
	return (
		<Box py={6} top={0} mb={10} pos={"sticky"} bg="surf" w="full">
			<Container w={"full"}>
				<HStack justifyContent={"space-between"}>
					<Heading>dbots</Heading>
					<HStack>
						<Button size="sm"><IconBrandDiscordFilled size={16} /> Login with Discord</Button>
					</HStack>
				</HStack>
			</Container>
		</Box>
	);
}
